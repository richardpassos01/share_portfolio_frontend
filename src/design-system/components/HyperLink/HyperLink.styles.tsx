import styled from "styled-components";

interface Props {
  color?: string;
  border?: boolean;
  width?: string;
  fontSize?: string;
}

export const HyperLink = styled.a<Props>`
  color: ${props => props.color ?? props.theme.colors.white};
  border: ${props => props.border ? `1px solid ${props.theme.colors.white}` : 'none'};
  border-radius: 5px;
  width: ${props => props.width ?? '80px'};
  height: 32px;
  align-items: center;
  justify-content: center;
  display: flex;
  text-decoration: none;
  font-family: system-ui;
  font-style: normal;
  font-weight: 400;
  font-size: ${props => props.fontSize ?? '16px'};;
  cursor: pointer;
`;

export default HyperLink;
