import styled from 'styled-components';

interface Props {
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  width?: string;
  height?: string;
}

export const Button = styled.button<Props>`
  background-color: ${(props) =>
    props.backgroundColor ?? props.theme.colors.darkBlue};
  color: ${(props) => props.color ?? props.theme.colors.white};
  width: ${(props) => props.width ?? '100%'};
  height: ${(props) => props.height ?? '100%'};
  border-radius: 0.5em;
  align-items: center;
  justify-content: center;
  font-family: system-ui;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  cursor: pointer;
  border: ${(props) =>
    props.borderColor ? `1px solid ${props.borderColor}` : 'none'};
`;

export default Button;
