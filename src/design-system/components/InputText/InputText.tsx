import * as React from 'react';
import { Container, SpanError, Input } from './InputText.styles';

interface Props {
  name?: string;
  onChange: any;
  value: string;
  invalid: any;
}

const InputText: React.FunctionComponent<Props> = ({
  name,
  onChange,
  value,
  invalid,
}) => (
  <Container>
    <Input name={name} onChange={onChange} value={value} invalid={invalid} />
    {invalid && (
      <div>
        <SpanError>{invalid}</SpanError>
      </div>
    )}
  </Container>
);

export default InputText;
