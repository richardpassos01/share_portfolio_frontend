import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CustomSelectContainer = styled.div`
  position: relative;
  font-family: Arial;
  width: 200px;
`;

const CustomSelectButton = styled.button`
  background-color: white;
  color: black;
  border: 1px solid DodgerBlue;
  border-radius: 5px;
  padding: 8px 16px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ArrowIcon = styled.span`
  width: 0;
  height: 0;
  border: 5px solid transparent;
  margin-right: 10px;
  transition: transform 0.3s;
`;

const DownArrow = styled(ArrowIcon)`
  border-top-color: DodgerBlue;
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'none')};
`;

const UpArrow = styled(ArrowIcon)`
  border-bottom-color: DodgerBlue;
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'none')};
`;

const OptionList = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid DodgerBlue;
  border-radius: 5px;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const OptionItem = styled.div`
  color: black;
  padding: 8px 16px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <CustomSelectContainer ref={selectRef}>
      <CustomSelectButton onClick={toggleSelect}>
        Select Items
        {isOpen ? <UpArrow isOpen={isOpen} /> : <DownArrow isOpen={isOpen} />}
      </CustomSelectButton>
      <OptionList isOpen={isOpen}>
        {options.map((option, index) => (
          <OptionItem
            key={index}
            onClick={() => toggleOption(option)}
            style={{
              backgroundColor: selectedOptions.includes(option)
                ? 'rgba(0, 0, 0, 0.1)'
                : 'transparent',
            }}
          >
            {option}
          </OptionItem>
        ))}
      </OptionList>
    </CustomSelectContainer>
  );
};

export default CustomSelect;
