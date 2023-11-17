import React, {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react';
import { Arrow } from '../Arrow';
import {
  SelectBoxButton,
  SelectBoxContainer,
  LabelContainer,
  OptionItem,
  OptionList,
} from './SelectBox.styles';

type Props = {
  arrayOfString?: string[];
  arrayOfObjects?: Record<string, string>[];
  label: string;
  selectedOptions?: string[];
  setSelectedOptions?: Dispatch<SetStateAction<string[]>>;
  handleOptions?: (option: Record<string, string>, close: () => void) => void;
  $width?: string;
  $mobileWidth?: string;
  $optionsSize?: number;
  $labelSize?: number;
};

export const SelectBox: React.FC<Props> = ({
  arrayOfString = [],
  arrayOfObjects = [],
  label,
  selectedOptions,
  setSelectedOptions,
  handleOptions,
  $width,
  $mobileWidth,
  $optionsSize,
  $labelSize,
}) => {
  const [isOpen, setIsOpen] = useState(false);

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

  const selectOption = (option: string | Record<string, string>) => {
    if (handleOptions) {
      return handleOptions(option as Record<string, string>, () =>
        setIsOpen(false),
      );
    }

    if (setSelectedOptions) {
      const updatedOptions = selectedOptions?.includes(option as string)
        ? selectedOptions?.filter((item) => item !== option)
        : ([...(selectedOptions as string[]), option] as string[]);

      setSelectedOptions(updatedOptions);
    }
  };

  return (
    <SelectBoxContainer
      ref={selectRef}
      $width={$width}
      $mobileWidth={$mobileWidth}
      $optionsSize={$optionsSize}
    >
      <SelectBoxButton $isOpen={isOpen} onClick={toggleSelect}>
        <LabelContainer $labelSize={$labelSize}>
          {label}
          <Arrow isOpen={isOpen} />
        </LabelContainer>
      </SelectBoxButton>
      <OptionList $isOpen={isOpen}>
        {arrayOfString?.map((option, index) => (
          <OptionItem
            key={index}
            onClick={() => selectOption(option)}
            $selected={Boolean(selectedOptions?.includes(option))}
          >
            {option}
          </OptionItem>
        ))}

        {arrayOfObjects?.map((option, index) => (
          <OptionItem
            key={index}
            onClick={() => selectOption(option)}
            $selected={false}
          >
            {option.name}
          </OptionItem>
        ))}
      </OptionList>
    </SelectBoxContainer>
  );
};
