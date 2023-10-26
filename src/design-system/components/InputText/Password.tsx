import React, { useState } from 'react';
import Image from 'next/image';
import {
  Container,
  ErrorText,
  Input,
  Label,
  TextField,
  ShowPasswordButton,
} from './InputText.styles';
import { Icons } from '@designSystem';

const InputEmail = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Container>
      <TextField>
        <Input
          type={passwordVisible ? 'text' : 'password'}
          placeholder=" "
          value={inputValue}
          onChange={handleInputChange}
          error={Boolean(error)}
          maxLength={30}
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

export default InputEmail;
