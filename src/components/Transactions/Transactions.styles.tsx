import { Card } from '@designSystem';
import styled from 'styled-components';

export const TransactionCard = styled(Card)`
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

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  padding: 2%;
  border-top: 1px solid ${(props) => props.theme.colors.gray};
  justify-content: space-between;

  @media ${(props) => props.theme.tokens.MAX_WIDTH_MOBILE} {
    display: none;
  }
`;
