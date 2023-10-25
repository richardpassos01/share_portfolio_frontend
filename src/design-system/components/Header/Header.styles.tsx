import styled from 'styled-components';

interface ContentProps {
  backgroundColor?: string;
  boxShadown?: boolean;
}

export const Content = styled.header<ContentProps>`
  height: 80px;
  background-color: ${(props) =>
    props.backgroundColor ?? props.theme.colors.white};
  display: flex;
  padding: 0 10% 0 12%;
  align-items: center;
  justify-content: flex-start;
  box-shadow: ${(props) =>
    props.boxShadown ? '0px 8px 12px rgba(200, 200, 200, 0.5)' : '0'};

  @media ${(props) => props.theme.tokens.MAX_WIDTH_TABLET} {
    padding: 0 2% 0 2%;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media ${(props) => props.theme.tokens.MAX_WIDTH_TABLET} {
    flex-direction: column;
  }
`;

export const HeaderItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${(props) => props.theme.tokens.MAX_WIDTH_MOBILE} {
    width: 98%;
  }
`;

export const HeaderTitle = styled.h2`
  color: ${(props) => props.theme.colors.darkBlue};
  margin: 0 0 0 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
`;
