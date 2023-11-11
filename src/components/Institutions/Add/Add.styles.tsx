import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  color: ${(props) => props.theme.colors.darkGray};
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2%;

  @media ${(props) => props.theme.tokens.MAX_WIDTH_MOBILE} {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const LinkContainer = styled.div`
  @media ${(props) => props.theme.tokens.MAX_WIDTH_MOBILE} {
    margin: 1em;
  }
`;

export const AddContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
