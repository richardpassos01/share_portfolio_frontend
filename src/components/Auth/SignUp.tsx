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

const Label = styled.label`
  position: absolute;
  font-size: 1rem;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  color: gray;
  padding: 0 0.3rem;
  margin: 0 0.5rem;
  transition: 0.1s ease-out;
  transform-origin: left top;
  pointer-events: none;
`;

const Input = styled.input`
  font-size: 1rem;
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 1rem 0.7rem;
  color: gray;
  transition: 0.1s ease-out;

  &:focus {
    border-color: #6200ee;
  }

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    color: #6200ee;
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
    if (!inputValue) {
      return setError('Campo obrigatório');
    }

    const isValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      inputValue,
    );

    if (!isValid) {
      return setError('Email inválido');
    }

    return setError('');
  };

  return (
    <Container>
      <MaterialTextField>
        <Input
          type="text"
          placeholder=" "
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <Label>Email</Label>
      </MaterialTextField>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default App;
