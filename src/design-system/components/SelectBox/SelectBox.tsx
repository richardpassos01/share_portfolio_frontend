import React, { useState, useEffect, useRef } from 'react';
import { Arrow } from '../Arrow';
import {
  SelectBoxButton,
  SelectBoxContainer,
  LabelContainer,
  OptionItem,
  OptionList,
} from './SelectBox.styles';

type Option = string;

type Props = {
  options: Option[];
  label: string;
  selectedOptions: Option[];
  setSelectedOptions: any;
  $width?: string;
};

export const SelectBox: React.FC<Props> = ({
  options,
  label,
  selectedOptions,
  setSelectedOptions,
  $width,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

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

  const selectOption = (option: Option) => {
    setSelectedOptions((prevOptions: Option[]) => {
      if (prevOptions.includes(option)) {
        return prevOptions.filter((item) => item !== option);
      }
      return [...prevOptions, option];
    });
  };

  return (
    <SelectBoxContainer ref={selectRef} $width={$width}>
      <SelectBoxButton isOpen={isOpen} onClick={toggleSelect}>
        <LabelContainer>
          {label}
          <Arrow isOpen={isOpen} />
        </LabelContainer>
      </SelectBoxButton>
      <OptionList isOpen={isOpen}>
        {options.map((option, index) => (
          <OptionItem
            key={index}
            onClick={() => selectOption(option)}
            $selected={Boolean(selectedOptions.includes(option))}
          >
            {option}
          </OptionItem>
        ))}
      </OptionList>
    </SelectBoxContainer>
  );
};
