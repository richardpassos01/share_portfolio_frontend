import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { Icons } from '../../index';
import {
  ItemName,
  MultiLevelItemList,
  StyledMenu,
} from './HamburguerMenu.styles';

export function MultiLevelItem({
  name,
  items,
  activated,
  strong,
}: {
  name: string;
  items: { name: string; href?: string }[];
  activated?: string;
  strong?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  const isCurrentItemActivate = name === activated;

  return (
    <MultiLevelItemList>
      <ItemName
        onClick={toggleSubMenu}
        $isActivate={isCurrentItemActivate}
        $strong={strong}
      >
        {name}
        <Image src={Icons.ArrowRight} alt="arrowRight" width={12} height={12} />
      </ItemName>
      {isOpen && (
        <ul>
          {items.map((item) => (
            <Item key={item.name} name={item.name} href={item.href} />
          ))}
        </ul>
      )}
    </MultiLevelItemList>
  );
}

export function Item({
  name,
  href,
  onClick,
  activated,
}: {
  name: string;
  href?: string;
  onClick?: () => void;
  activated?: string;
}) {
  const isCurrentItemActivate = name === activated;

  return href ? (
    <Link href={href} style={{ textDecoration: 'none', width: '89%' }}>
      <li>
        <ItemName onClick={onClick} $isActivate={isCurrentItemActivate}>
          {name}
        </ItemName>
      </li>
    </Link>
  ) : (
    <li>
      <ItemName onClick={onClick} $isActivate={isCurrentItemActivate}>
        {name}
      </ItemName>
    </li>
  );
}

export function HamburguerMenu({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      return (document.body.style.overflow = 'auto');
    }
    document.body.style.overflow = 'hidden';
  };

  return (
    <StyledMenu $isOpen={menuOpen}>
      <div id="menuToggle">
        <input type="checkbox" checked={menuOpen} onChange={toggleMenu} />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">{children}</ul>
      </div>
    </StyledMenu>
  );
}
