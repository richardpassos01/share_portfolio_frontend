import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

  &:focus + ${Label} {
    color: #6200ee;
    top: 0;
    transform: translateY(-50%) scale(0.9);
  }
`;

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Container>
      <MaterialTextField>
        <Input
          type="text"
          placeholder=" "
          value={inputValue}
          onChange={handleInputChange}
        />
        <Label>Email</Label>
      </MaterialTextField>
    </Container>
  );
};

export default App;
