import styled from 'styled-components';

const Card = styled.div<{
  $width?: string;
  $height?: string;
  $minWidth?: string;
  $mobileWidth?: string;
  $mobileHeight?: string;
}>`
  background-color: ${(props) => props.theme.colors.white};
  margin: auto;
  padding: 0;
  box-shadow: 16px 24px 56px 0 rgba(7, 24, 126, 0.16);
  border-radius: 8px;
  width: ${(props) => props.$width ?? 'auto'};
  min-width: ${(props) => props.$minWidth ?? '1000px'};
  height: ${(props) => props.$height ?? '550px'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${(props) => props.theme.tokens.MAX_WIDTH_MOBILE} {
    width: ${(props) => props.$mobileWidth ?? '96%'};
    min-width: 0;
    height: ${(props) => props.$mobileHeight ?? '90%'};
  }
`;

export default Card;
