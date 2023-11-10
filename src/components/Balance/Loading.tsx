import React from 'react';
import {
  Container,
  Description,
  Item,
  ItemDescription,
} from './Balance.styles';
import { Skeleton } from '@designSystem';

export type BalanceProps = {
  yearMonth: string;
  netEarning: string;
  loss: string;
  tradeEarning: string;
  dividendEarning: string;
  taxWithholding: string;
  tax: string;
};

const Loading: React.FC = () => {
  const itemDescriptions = [
    { label: 'Lucro' },
    { label: 'Perdas' },
    { label: 'Ganhos com trade' },
    { label: 'Rendimentos' },
    { label: 'Imposto retido na fonte' },
    { label: 'Imposto devido' },
  ];

  return (
    <Container>
      <Description>
        <Skeleton $width={100} $height={20} />
      </Description>
      {itemDescriptions.map((item, index) => (
        <Item key={index}>
          <ItemDescription>{item.label}</ItemDescription>
          <Skeleton $width={80} $height={20} />
        </Item>
      ))}
    </Container>
  );
};

export default Loading;
