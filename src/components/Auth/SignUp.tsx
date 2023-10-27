import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const MaterialTextField = styled.div`
  position: relative;
`;

const Label = styled.label<{ error: boolean }>`
  position: absolute;
  font-size: 1rem;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  color: ${(props) =>
    props.error ? props.theme.colors.red : props.theme.colors.darkGray};
  padding: 0 0.3rem;
  margin: 0 0.5rem;
  transition: 0.1s ease-out;
  transform-origin: left top;
  pointer-events: none;
`;

const Input = styled.input<{ error: boolean }>`
  font-size: 15px;
  font-weight: 300;
  outline: none;
  border: 1px solid
    ${(props) =>
      props.error ? props.theme.colors.red : props.theme.colors.gray};
  border-radius: 5px;
  padding: 1rem 0.7rem;
  color: ${(props) => props.theme.colors.darkGray};
  transition: 0.1s ease-out;

  &:focus {
    border-color: #6200ee;
  }

  &:focus + ${Label} {
    color: #6200ee;
  }

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    font-size: 14px;
    top: 0;
    transform: translateY(-50%) scale(0.9);
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`;

const App = () => {
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
      return setError('Username inválido');
    }

    return setError('');
  };

  return (
    <Container>
      <MaterialTextField>
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
      </MaterialTextField>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default App;
