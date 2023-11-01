import React, { useState, useEffect, useRef } from 'react';
import { Arrow } from '../Arrow';
import {
  CustomSelectButton,
  CustomSelectContainer,
  LabelContainer,
  OptionItem,
  OptionList,
} from './SelectBox.styles';

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
      <CustomSelectButton isOpen={isOpen} onClick={toggleSelect}>
        <LabelContainer>
          Select Items
          <Arrow isOpen={isOpen} />
        </LabelContainer>
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
