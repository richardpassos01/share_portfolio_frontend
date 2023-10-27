import React from 'react';
import Tokens from '../../styles/Tokens';
import { Container } from './HideStyles';

interface Props {
  on: Tokens;
  children?: React.ReactNode;
  width?: string;
}

export default function Hide({ on, children, width }: Props) {
  return (
    <Container $token={on} width={width}>
      {children}
    </Container>
  );
}
