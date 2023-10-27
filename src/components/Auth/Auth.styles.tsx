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
  flex-direction: column;

  @media ${(props) => props.theme.tokens.MIN_WIDTH_TABLET} {
    width: 40%;
    margin: 0 50px 0 28px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 12em;
`;

export const ErrorContainer = styled.div``;

export const SubmitContainer = styled.div`
  width: 100%;
`;
