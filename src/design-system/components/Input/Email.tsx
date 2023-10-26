import React from 'react';
import { Container, ErrorText, Input, Label, TextField } from './Input.styles';

interface Props {
  value: string;
  onBlur: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

export const InputEmail: React.FC<Props> = ({
  value,
  onBlur,
  onChange,
  error,
}) => {
  return (
    <>
      <Container>
        <TextField>
          <Input
            type="email"
            id="emailInput"
            placeholder=" "
            value={value}
            error={Boolean(error)}
            onChange={onChange}
            onBlur={onBlur}
            maxLength={20}
          />
          <Label error={Boolean(error)}>Email</Label>
        </TextField>
        {error && <ErrorText>{error}</ErrorText>}
      </Container>
    </>
  );
};

export default InputEmail;
