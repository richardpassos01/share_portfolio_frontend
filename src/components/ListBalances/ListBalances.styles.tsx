import styled from 'styled-components';

export const Space = styled.div`
  margin-bottom: 25px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em 2em 1em 2em;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 3% 2% 4% 2%;

  @media ${(props) => props.theme.tokens.MAX_WIDTH_MOBILE} {
    padding: 10% 0 10% 0;
    justify-content: center;
  }
`;
