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
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: colum;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.gray};

  @media ${(props) => props.theme.tokens.MIN_WIDTH_TABLET} {
    width: 40%;
    height: 100vh;
    margin-top: -80px;
  }
`;
