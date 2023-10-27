import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${(props) => props.theme.colors.gray};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: colum;
  justify-content: space-between;

  @media ${(props) => props.theme.tokens.MIN_WIDTH_TABLET} {
    width: 60%;
    margin-left: 5%;
  }
`;
