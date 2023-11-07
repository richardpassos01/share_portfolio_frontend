import { Card } from '@designSystem';
import styled from 'styled-components';

export const OverviewCard = styled(Card)`
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
  justify-content: space-around;
  padding: 2em 2em 1em 2em;

  @media ${(props) => props.theme.tokens.MAX_WIDTH_MOBILE} {
    flex-direction: column;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 3% 2% 4% 2%;

  @media ${(props) => props.theme.tokens.MAX_WIDTH_MOBILE} {
    padding: 10% 0 10% 0;
    flex-direction: column-reverse;
    align-items: center;

    a {
      margin-bottom: 1em;
    }
  }
`;

export const Description = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: ${(props) => props.theme.colors.darkGray};
`;

export const HeaderMoney = styled(Description)`
  font-size: 14px;
  font-weight: 400;
  margin-left: 10px;
`;

export const HeaderDescription = styled(Description)`
  font-size: 16px;
  font-weight: 600;
`;
