import styled from 'styled-components';
import Tokens from '../../styles/Tokens';

export const Container = styled.div<{ token: Tokens }>`
  @media ${(props) => props.token} {
    display: none;
  }
`;
