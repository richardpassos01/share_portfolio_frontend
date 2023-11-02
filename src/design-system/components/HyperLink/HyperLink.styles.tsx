import styled from 'styled-components';

interface Props {
  $color?: string;
  $border?: string;
  $width?: string;
  $fontSize?: string;
}

export const HyperLink = styled.a<Props>`
  color: ${(props) => props.$color ?? props.theme.colors.white};
  border: ${(props) => (props.$border ? `1px solid ${props.$border}` : 'none')};
  border-radius: 20px;
  width: ${(props) => props.$width ?? '80px'};
  height: 32px;
  align-items: center;
  justify-content: center;
  display: flex;
  text-decoration: none;
  font-family: system-ui;
  font-family: 'Poppins', sans-serif;
  font-size: ${(props) => (props.$fontSize ? `${props.$fontSize}px` : '16px')};
  cursor: pointer;
`;

export default HyperLink;
