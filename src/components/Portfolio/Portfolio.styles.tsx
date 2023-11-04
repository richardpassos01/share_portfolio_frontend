import { Card } from '@designSystem';
import styled from 'styled-components';

export const PortfolioCard = styled(Card)`
  width: auto;
  min-width: 1000px;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.tokens.MAX_WIDTH_MOBILE} {
    width: 96%;
    min-width: 0;
    height: 90%;
  }
`;
