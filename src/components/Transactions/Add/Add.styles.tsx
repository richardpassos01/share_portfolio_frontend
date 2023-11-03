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

export const UploadFileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 70%;
  justify-content: center;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  padding: 2%;
`;
