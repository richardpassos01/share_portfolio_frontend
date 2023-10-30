import React, { useState } from 'react';
import { Overlay, Menu, MenuContent } from './FilterMenu.styles';
import Image from 'next/image';
import { Icons } from '../../index';

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
        <MenuContent $isOpen={isOpen}>{children}</MenuContent>
      </Menu>
    </div>
  );
}

export function Item({
  name,
  href,
  onClick,
  activated,
}: {
  name: string;
  href: string;
  onClick?: () => void;
  activated?: string;
}) {
  const isCurrentItemActivate = name === activated;

  return <div>da</div>;
}
