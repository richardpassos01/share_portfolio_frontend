import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { Icons } from '../../index';
import { StyledMenu } from './HamburguerMenuStyles';

export function Item({ name, href }: { name: string; href: string }) {
  return (
    <Link href={href} style={{ textDecoration: 'none', width: '89%' }}>
      <li>
        <div>{name}</div>
        <Image src={Icons.ArrowRight} alt="arrowRight" width={12} height={12} />
      </li>
    </Link>
  );
}

export function HamburguerMenu({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
