import styled, { css } from 'styled-components';

export const SelectBoxContainer = styled.div<{
  $width?: string;
  $mobileWidth?: string;
  $optionsSize?: number;
}>`
  position: relative;
  font-size: ${(props) =>
    props.$optionsSize ? `${props.$optionsSize}px` : '13px'};
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  width: ${(props) => (props.$width ? `${props.$width}px` : '100%')};

  @media ${(props) => props.theme.tokens.MAX_WIDTH_MOBILE} {
    width: ${(props) =>
      props.$mobileWidth ? `${props.$mobileWidth}px` : '100%'};
  }
`;

export const SelectBoxButton = styled.button<{ $isOpen: boolean }>`
  background-color: white;
  color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  height: 42px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;

  ${(props) =>
    props.$isOpen &&
    css`
      border-bottom: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `};
`;
export const OptionList = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  background-color: white;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  box-shadow: 16px 24px 56px 0 rgba(7, 24, 126, 0.16);
  border-top: 1px solid ${(props) => props.theme.colors.softBlue};
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  max-height: 150px;
  overflow: auto;

  & > *:first-child {
    margin-top: 10px;
  }
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

  &:hover {
    background-color: ${(props) => props.theme.colors.gray};
  }

  background-color: ${(props) =>
    props.$selected ? props.theme.colors.gray : 'transparent'};
`;

export const LabelContainer = styled.div<{ $labelSize?: number }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: ${(props) =>
    props.$labelSize ? `${props.$labelSize}px` : '15px'};
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  justify-content: space-between;
`;
