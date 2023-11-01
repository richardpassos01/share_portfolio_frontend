import styled, { css } from 'styled-components';

export const SelectBoxContainer = styled.div<{ $width?: string }>`
  position: relative;
  font-size: 13px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  width: ${(props) => (props.$width ? `${props.$width}px` : '100%')};
`;

export const SelectBoxButton = styled.button<{ isOpen: boolean }>`
  background-color: white;
  color: #093677;
  width: 100%;
  height: 42px;
  border-radius: 1.5em;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #093677;

  ${(props) =>
    props.isOpen &&
    css`
      border-bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
`;

export const OptionList = styled.div<{ isOpen: boolean }>`
  position: absolute;
  background-color: white;
  border: 1px solid #093677;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  border-top: 0;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

export const OptionItem = styled.div<{ $selected: boolean }>`
  color: ${(props) => props.theme.colors.darkGray};
  padding: 3px 0 3px 12px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  border-radius: 38px;
  margin: 0px 5px 6px 4px;

  background-color: ${(props) =>
    props.$selected ? props.theme.colors.gray : 'transparent'};
`;

export const LabelContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  justify-content: space-around;
`;
