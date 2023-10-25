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
  width: ${(props) => `${props.width}px` ?? '100%'};
  height: ${(props) => `${props.height}px` ?? '100%'};
  font-size: 90%;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  border-radius: 1.5em;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: ${(props) =>
    props.borderColor ? `1px solid ${props.borderColor}` : 'none'};
`;

export default Button;
