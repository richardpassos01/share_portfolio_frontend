import React from 'react';
import Tokens from '../../styles/Tokens';
import { Container } from './HideStyles';

interface Props {
  on: Tokens;
  children?: React.ReactNode;
}

export default function Hide({ on, children }: Props) {
  return <Container token={on}>{children}</Container>;
}
