import styled from 'styled-components';

export const SubmitContainer = styled.div`
  display: flex;
  margin: 34px 0 0 0;
  justify-content: space-between;
  width: 100%;
  padding: 0 40px 10px 40px;

  @media ${(props) => props.theme.tokens.MIN_WIDTH_TABLET} {
    display: none;
  }
`;
