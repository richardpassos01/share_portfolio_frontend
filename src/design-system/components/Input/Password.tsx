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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Container>
      <TextField>
        <Input
          type={passwordVisible ? 'text' : 'password'}
          id="passwordInput"
          placeholder=" "
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          maxLength={20}
          $error={error}
        />
        <Label $error={error}>Senha</Label>
        <ShowPasswordButton onClick={togglePasswordVisibility}>
          {passwordVisible ? (
            <Image src={Icons.Eye} alt="eye" width={20} height={20} />
          ) : (
            <Image src={Icons.EyeSlash} alt="eyeSlash" width={20} height={20} />
          )}
        </ShowPasswordButton>
      </TextField>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default InputPassword;
