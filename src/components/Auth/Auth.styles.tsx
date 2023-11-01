import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AuthFormContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 100%;
  padding: 5%;
  justify-content: space-between;

  @media ${(props) => props.theme.tokens.MIN_WIDTH_TABLET} {
    padding: 0;
    width: 40%;
    margin: 0 50px 0 28px;
    height: 22em;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 12em;
`;

export const ErrorContainer = styled.div`
  border: 1px solid red;
  border-radius: 5px;
  margin-bottom: 26px;
  padding: 11px;
  background-color: ${(props) => props.theme.colors.pink};
`;

export const RedirectContainer = styled.div<{ $errors: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => (props.$errors ? '30px' : '10px')};

  a {
    margin: 8px;
  }
`;

export const SubmitContainer = styled.div<{ $error: boolean }>`
  margin-top: ${(props) => (props.$error ? '10px' : '0')};
  width: 100%;
`;

export const PasswordContainer = styled.div<{ $error: boolean }>`
  margin-top: ${(props) => (props.$error ? '15px' : '0')};
`;

export const UsernameContainer = styled.div<{ $error: boolean }>`
  margin-bottom: ${(props) => (props.$error ? '12px' : '0')};
`;
