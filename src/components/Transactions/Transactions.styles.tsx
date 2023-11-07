import styled from 'styled-components';

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
