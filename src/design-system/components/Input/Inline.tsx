import React from 'react';
import { Container, Inline, TextField } from './Input.styles';

interface Props {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InlineInput: React.FC<Props> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Container>
      <TextField>
        <Inline
          type="text"
          id="inline"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          maxLength={20}
        />
      </TextField>
    </Container>
  );
};

export default InlineInput;
