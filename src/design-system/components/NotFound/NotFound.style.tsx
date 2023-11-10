import styled from 'styled-components';

export const Container = styled.div<{ $mobileMarginTop?: number }>`
    width; 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    img {
        opacity: 0.5;
    }

    @media ${(props) => props.theme.tokens.MAX_WIDTH_MOBILE} {
        margin-top: ${(props) =>
          props.$mobileMarginTop ? `${props.$mobileMarginTop}px` : '0'}
    }
`;

export const Description = styled.h3`
  color: ${(props) => props.theme.colors.darkBlue};
  opacity: 0.8;
`;
