import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  Overlay,
  Menu,
  MenuContent,
  FilterTitle,
  LabelTitle,
  TitleContainer,
  InputContainer,
  LabelContainer,
} from './FilterMenu.styles';
import Image from 'next/image';
import { Icons } from '../../index';
import CheckBox from '../Input/CheckBox';

type Props = {
  label: string;
  items: string[];
  filter: string[];
  setFilter: Dispatch<SetStateAction<string[]>>;
};

export function Item({ label, items, filter, setFilter }: Props) {
  const onChange = (isChecked: boolean, value: string) => {
    const newFilter = new Set(filter);
    if (isChecked) {
      newFilter.add(value);
    } else {
      newFilter.delete(value);
    }

    setFilter([...newFilter]);
  };

  return (
    <>
      <LabelContainer>
        <LabelTitle>{label}</LabelTitle>
      </LabelContainer>
      <InputContainer>
        {items.map((item, index) => (
          <CheckBox key={index} value={item} onChange={onChange} />
        ))}
      </InputContainer>
    </>
  );
}

export function FilterMenu({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleMenu} style={{ cursor: 'pointer' }}>
        <Image src={Icons.Filter} alt="filter" width={17} height={17} />
      </div>
      <Overlay $isOpen={isOpen} onClick={toggleMenu} />
      <Menu $isOpen={isOpen}>
        <MenuContent $isOpen={isOpen}>
          <TitleContainer>
            <FilterTitle>Filtrar</FilterTitle>
          </TitleContainer>
          {children}
        </MenuContent>
      </Menu>
    </div>
  );
}
