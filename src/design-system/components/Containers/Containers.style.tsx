import styled from 'styled-components';

export const OverflowContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.tokens.MAX_WIDTH_MOBILE} {
    overflow: scroll;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
