import styled from "styled-components";

interface Props {
  backgroundColor?: string;
  border?: boolean;
  width?: string;
  height?: string;
}

export const Button = styled.button<Props>`
  background-color: ${props => props.backgroundColor ?? props.theme.colors.green};
  width: ${props => props.width ?? '100%'};
  height: ${props => props.height ?? '100%'};
  border-radius: 0.5em;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  font-family: system-ui;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  cursor: pointer;
  border: ${props => props.border ? `1px solid ${props.theme.colors.white}` : 'none'};
`;

export default Button;
