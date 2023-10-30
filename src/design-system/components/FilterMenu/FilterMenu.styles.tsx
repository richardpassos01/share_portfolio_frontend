import styled from 'styled-components';

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  z-index: 1000;
  transition: opacity 0.3s ease;
`;

export const Menu = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.$isOpen ? '50%' : '100%')};
  width: 50%; /* Cobrindo metade da tela */
  height: 100%; /* Cobrindo toda a altura da tela */
  background: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  z-index: 1001;
  transition: left 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  overflow: hidden;
  overflow-y: auto;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
`;

export const MenuContent = styled.div<{ $isOpen: boolean }>`
  width: 100%; /* Ajustado para ocupar toda a largura do Menu */
`;

export const ItemName = styled.div<{ $isActivate: boolean }>`
  color: ${(props) =>
    props.$isActivate ? props.theme.colors.blue : props.theme.colors.darkGray};
`;
