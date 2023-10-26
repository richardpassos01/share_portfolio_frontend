import React, { useState } from 'react';
import {
  Container,
  ErrorText,
  Input,
  Label,
  TextField,
} from './InputText.styles';

const InputEmail = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleInputBlur = () => {
    const emailInput = document.getElementById(
      'emailInput',
    ) as HTMLInputElement;

    if (!inputValue) {
      return setError('Campo obrigatório');
    }

    if (emailInput.validity.typeMismatch) {
      return setError('Email inválido');
    }

    return setError('');
  };

  return (
    <Container>
      <TextField>
        <Input
          type="email"
          placeholder=" "
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          error={Boolean(error)}
          id="emailInput"
        />
        <Label error={Boolean(error)}>Email</Label>
      </TextField>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default InputEmail;
