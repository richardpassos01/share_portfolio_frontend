import React from 'react';
import {
  Container,
  Description,
  Item,
  ItemDescription,
  ItemMoney,
} from './Balance.styles';

type Balance = {
  yearMonth: string;
  netEarning: string;
  loss: string;
  tradeEarning: string;
  dividendEarning: string;
  taxWithholding: string;
  tax: string;
};

type Props = {
  balance: Balance;
};

const Balance: React.FC<Props> = ({ balance }) => {
  const itemDescriptions = [
    { label: 'Lucro', value: balance.netEarning },
    { label: 'Perdas', value: balance.loss },
    { label: 'Ganhos com trade', value: balance.tradeEarning },
    { label: 'Rendimentos', value: balance.dividendEarning },
    { label: 'Imposto retido na fonte', value: balance.taxWithholding },
    { label: 'Imposto devido', value: balance.tax },
  ];

  return (
    <Container>
      <Description>
        Mês <span>{balance.yearMonth}</span>
      </Description>
      {itemDescriptions.map((item, index) => (
        <Item key={index}>
          <ItemDescription>{item.label}</ItemDescription>
          <ItemMoney>{item.value}</ItemMoney>
        </Item>
      ))}
    </Container>
  );
};

export default Balance;
