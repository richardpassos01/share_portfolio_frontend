import styled from 'styled-components';

const Card = styled.div<{ $width?: string; $height?: string }>`
  background-color: ${(props) => props.theme.colors.white};
  margin: auto;
  padding: 0;
  box-shadow: 16px 24px 56px 0 rgba(7, 24, 126, 0.16);
  border-radius: 8px;
  width: 100%;
  height: ${(props) => props.$height ?? '100%'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${(props) => props.theme.tokens.MIN_WIDTH_TABLET} {
    width: ${(props) => props.$width ?? '100%'};
  }
`;

export default Card;
