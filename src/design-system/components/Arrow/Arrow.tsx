import React from 'react';
import { ArrowButton } from './Arrow.styles';

const Arrow: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <ArrowButton $isOpen={isOpen}>
      <span className="left-bar"></span>
      <span className="right-bar"></span>
    </ArrowButton>
  );
};

export default Arrow;
