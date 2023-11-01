import React from 'react';
import { ArrowButton } from './Arrow.styles';

const Arrow: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <ArrowButton className={`arrow-icon ${isOpen ? 'open' : ''}`}>
      <span className="left-bar"></span>
      <span className="right-bar"></span>
    </ArrowButton>
  );
};

export default Arrow;
