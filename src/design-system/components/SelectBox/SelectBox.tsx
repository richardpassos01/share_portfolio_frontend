import React, { useState, useEffect, useRef } from 'react';
import { Arrow } from '../Arrow';
import {
  CustomSelectButton,
  CustomSelectContainer,
  LabelContainer,
  OptionItem,
  OptionList,
} from './SelectBox.styles';

type Option = string;

const CustomSelect: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const options: Option[] = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
  ];

  const selectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        event.target instanceof Node &&
        !selectRef.current.contains(event.target)
      ) {
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

  const toggleOption = (option: Option) => {
    setSelectedOptions((prevOptions: Option[]) => {
      if (prevOptions.includes(option)) {
        return prevOptions.filter((item) => item !== option);
      } else {
        return [...prevOptions, option];
      }
    });
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
