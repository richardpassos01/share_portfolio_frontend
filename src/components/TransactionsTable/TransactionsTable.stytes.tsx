import { Card } from '@designSystem';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

export const FilterButtonsContainer = styled.div`
  width: 248px;
  margin: 25px 20px 25px 0;
  display: flex;
  justify-content: space-around;
`;

export const MobileFilterContainer = styled.div`
  margin: 25px 15px 25px 0;
`;

export const TransactionCard = styled(Card)`
  width: 1000px;
  height: 500px;

  @media ${(props) => props.theme.tokens.MAX_WIDTH_MOBILE} {
    width: 96%;
    height: 90%;
  }
`;
