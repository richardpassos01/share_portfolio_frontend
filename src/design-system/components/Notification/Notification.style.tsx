import styled, { css, keyframes } from 'styled-components';
import { Colors } from '../../styles/Colors';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

export const ToastContainer = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: ${({ $visible }) => ($visible ? '1000' : '0')};
  width: 300px;
  max-width: 100%;
  animation: ${({ $visible }) =>
    $visible
      ? css`
          ${slideIn} 0.15s ease-in-out, ${bounce} 0.5s;
        `
      : 'none'};
  animation-delay: ${({ $visible }) => ($visible ? '0s, 0.15s' : 'none')};
  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  display: ${({ $visible }) => ($visible ? 'fixed' : 'none')};
`;

const ToastBackgroundColor = {
  success: Colors.darkGreen,
  error: Colors.red,
};

export const Toast = styled.div<{ $type: 'success' | 'error' }>`
  background-color: ${(props) => ToastBackgroundColor[props.$type]};
  color: #fff;
  padding: 12px;
  border-radius: 10px;
  margin-top: 8px;
  font-weight: 600;
  font-size: 14px;
`;
