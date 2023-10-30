import { Card } from '@designSystem';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const TransactionCard = styled(Card)<{ $width: number }>`
  width: auto;
  height: 500px;

  @media ${(props) => props.theme.tokens.MAX_WIDTH_MOBILE} {
    margin: 2%;
    width: ${(props) => `${props.$width - 15}px`};
    height: 650px;
  }
`;
