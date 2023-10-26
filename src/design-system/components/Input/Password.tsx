import React, { useState } from 'react';
import {
  Container,
  ErrorText,
  Input,
  Label,
  ShowPasswordButton,
  TextField,
} from './Input.styles';
import Image from 'next/image';
import { Icons } from '../../index';

interface Props {
  value: string;
  onBlur: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

export const InputPassword: React.FC<Props> = ({
  value,
  onBlur,
  onChange,
  error,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [inputType, setInputType] = useState('password');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    setInputType(passwordVisible ? 'text' : 'password');
  };

  return (
    <Container>
      <TextField>
        <Input
          type={inputType}
          id="passwordInput"
          placeholder=" "
          value={value}
          onChange={onChange}
          error={Boolean(error)}
          onBlur={onBlur}
          maxLength={20}
        />
        <Label error={Boolean(error)}>Senha</Label>
        <ShowPasswordButton onClick={togglePasswordVisibility}>
          {passwordVisible ? (
            <Image src={Icons.Eye} alt="Eye" width={20} height={20} />
          ) : (
            <Image src={Icons.EyeSlash} alt="EyeSlash" width={20} height={20} />
          )}
        </ShowPasswordButton>
      </TextField>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default InputPassword;
