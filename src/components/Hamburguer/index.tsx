import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.nav`
  div#menuToggle {
    display: block;
    position: absolute;
    top: 15px;
    right: 20px;
    z-index: 1;
    user-select: none;
    height: 100%;
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
    position: absolute;
    width: 300px;
    margin: -100px 0 0 0;
    padding: 50px;
    padding-top: 125px;
    right: -100px;
    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    opacity: 0;
    height: 100%;
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
  return (
    <StyledMenu>
      <div id="menuToggle">
        <input type="checkbox" />
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
