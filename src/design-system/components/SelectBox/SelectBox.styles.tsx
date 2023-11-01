import styled, { css } from 'styled-components';

export const CustomSelectContainer = styled.div`
  position: relative;
  font-size: 13px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  width: 100%;
`;

export const CustomSelectButton = styled.button<{ isOpen: boolean }>`
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
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

export const OptionItem = styled.div`
  color: black;
  padding: 8px 0px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
`;
