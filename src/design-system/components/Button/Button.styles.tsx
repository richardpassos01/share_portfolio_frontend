import styled from 'styled-components';

export type Props = {
  $backgroundColor?: string;
  $color?: string;
  $borderColor?: string;
  $width?: string;
  $height?: string;
  $isLoading?: boolean;
};

export const ButtonStyle = styled.button<Props>`
  background-color: ${(props) =>
    props.$backgroundColor ?? props.theme.colors.darkBlue};
  color: ${(props) => props.$color ?? props.theme.colors.white};
  width: ${(props) => (props.$width ? `${props.$width}px` : '100%')};
  height: ${(props) => (props.$height ? `${props.$height}px` : '100%')};
  font-size: 90%;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  border-radius: 1.5em;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
  border: ${(props) =>
    props.$borderColor ? `1px solid ${props.$borderColor}` : 'none'};

  &:disabled {
    background-color: ${(props) =>
      props.$isLoading ? props.$backgroundColor : props.theme.colors.disabled};
    cursor: not-allowed;
  }
`;
