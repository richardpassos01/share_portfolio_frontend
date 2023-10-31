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

export const FilterTitle = styled.h1`
  font-family: 'Opens sans', sans-serif;
  font-weight: 100;
`;

export const LabelTitle = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 14px;
`;

export const TitleContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  padding: 10px 0 10px 20px;
`;

export const LabelContainer = styled(TitleContainer)`
  border-bottom: none;
  padding: 10px 0 10px 20px;
`;

export const InputContainer = styled.div`
  margin-left: 17px;
  display: flex;
  flex-direction: column;
  margin-bottom: 17px;
`;

export const Menu = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.$isOpen ? '20%' : '100%')};
  width: 100%; /* Cobrindo metade da tela */
  height: 100%; /* Cobrindo toda a altura da tela */
  background: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  font:
    1rem 'Fira Sans',
    sans-serif;
`;

export const CheckboxInput = styled.input`
  display: none; /* Ocultar o input padrão */
`;

export const CustomCheckbox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CheckboxLabel = styled.label`
  font:
    1rem 'Fira Sans',
    sans-serif;
  margin-left: 0.4rem;
`;

export const CustomCheckboxMarker = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
