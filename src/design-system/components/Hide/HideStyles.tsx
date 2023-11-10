import styled from 'styled-components';
import { Tokens } from '../../styles/Tokens';

export const Container = styled.div<{ $token: Tokens; $width?: string }>`
  width: ${(props) => props?.$width ?? 'auto'};
  @media ${(props) => props.$token} {
    display: none;
  }
`;
