import React from 'react';
import Image from 'next/image';
import { Icons } from '@designSystem';
import { Container, Description } from './NotFound.style';

const NotFound: React.FC<{
  width: number;
  height: number;
  mobileMarginTop?: number;
}> = ({ width, height, mobileMarginTop }) => {
  return (
    <Container $mobileMarginTop={mobileMarginTop}>
      <Image
        src={Icons.NotFound}
        alt="xlsx-icon"
        width={width}
        height={height}
      />
      <Description>Nenhum item encontrado</Description>
    </Container>
  );
};

export default NotFound;
