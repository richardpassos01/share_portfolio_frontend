import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: string;
}

export const Input = styled.input<Props>`
    width: 100%;
    margin-top: 0.5em;
    background: ${props => props.theme.colors.white};
    border-radius: 8px;
    outline: none;
    font-family: system-ui;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: rgb(61, 61, 77);
    padding: 5px;
    height: 35px;
    border: 1px solid ${props =>
      props.invalid ?
      props.theme.colors.red :
      props.theme.colors.secondary.grey
    };

    ::placeholder {
      color: ${props => props.theme.colors.darkGrey};
    }
  `;

export const SpanError = styled.span`
  font-size: 14px;
  color: ${props => props.theme.colors.red};
`;

export const Container = styled.div`
  width: 300px;
  position: relative;
`;
