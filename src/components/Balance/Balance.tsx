import React, { useState } from 'react';
import Image from 'next/image';
import {
  Container,
  Description,
  Item,
  ItemDescription,
  ItemMoney,
  ReasonContainer,
} from './Balance.styles';
import { Icons } from '@designSystem';

export type BalanceProps = {
  yearMonth: string;
  netEarning: string;
  loss: string;
  tradeEarning: string;
  dividendEarning: string;
  taxWithholding: string;
  tax: string;
  totalSold: number;
  restitution: number;
  currentTotalLoss: number;
};

type Props = {
  balance: BalanceProps;
};

const Balance: React.FC<Props> = ({ balance }) => {
  // const itemDescriptions = [
  //   { label: 'Lucro', value: balance.netEarning },
  //   { label: 'Perdas', value: balance.loss },
  //   { label: 'Imposto devido', value: balance.tax },
  // ];

  const itemDescriptions = [
    { label: 'Lucro', value: balance.netEarning },
    { label: 'Perdas no mês', value: balance.loss },
    { label: 'Perdas totais', value: balance.currentTotalLoss },
    { label: 'Ganhos com trade', value: balance.tradeEarning },
    { label: 'Rendimentos', value: balance.dividendEarning },
    { label: 'Imposto retido na fonte', value: balance.taxWithholding },
    { label: 'Imposto devido', value: balance.tax },
    { label: 'Restituição', value: balance.restitution },
    { label: 'Total vendido', value: balance.totalSold },
  ];

  const [showReason, setShowReason] = useState(false);

  return (
    <Container>
      <Description>
        Mês <span>{balance.yearMonth}</span>
      </Description>
      {itemDescriptions.map((item, index) => (
        <Item key={index} $border={true}>
          <ItemDescription>{item.label}</ItemDescription>
          <ItemMoney>{item.value}</ItemMoney>
        </Item>
      ))}
      <ReasonContainer onClick={() => setShowReason(!showReason)}>
        <Item>
          <ItemDescription>Detalhes</ItemDescription>
          <Image src={Icons.AddIcon} alt="reason" width={15} height={15} />
        </Item>

        {showReason && <ItemDescription>{balance.reason}</ItemDescription>}
      </ReasonContainer>
    </Container>
  );
};

export default Balance;
