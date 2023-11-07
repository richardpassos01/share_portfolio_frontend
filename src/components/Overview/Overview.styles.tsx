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
`;

export const HeaderTitle = styled.div`
  display: flex;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BodyItem = styled.div`
  display: flex;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  padding: 2%;
`;
