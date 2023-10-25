import React, { useState } from 'react';
import styled from 'styled-components';

const StyledMenu = styled.nav`
  div#menuToggle {
    display: block;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 1;
    user-select: none;
  }

  div#menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }

  div#menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #cdcdcd;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition:
      transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      opacity 0.55s ease;
  }

  div#menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  div#menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  div#menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  div#menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  div#menuToggle input:checked ~ span:nth-last-child(2) {
    opacity: 1;
    transform: rotate(-45deg) translate(0, -1px);
  }

  ul#menu {
    position: fixed;
    top: -16px;
    right: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
    width: 50%;
    height: 100%;
    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transition: right 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 55px;
  }

  ul#menu li {
    padding: 10px 0;
    font-size: 22px;
  }

  div#menuToggle input:checked ~ ul#menu {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledMenu isOpen={menuOpen}>
      <div id="menuToggle">
        <input type="checkbox" checked={menuOpen} onChange={toggleMenu} />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Info</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </StyledMenu>
  );
}
