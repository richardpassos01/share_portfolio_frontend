import styled from 'styled-components';

const Loading = styled.div<{ $size: number }>`
  width: ${(props) => props.$size || '80'}px;
  height: ${(props) => props.$size || '80'}px;
  background: transparent;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.gray};
  border-bottom-color: transparent;
  animation: screen-loading 700ms linear infinite;

  @keyframes screen-loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
