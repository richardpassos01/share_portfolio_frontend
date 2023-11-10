import React from 'react';

import { Card, Containers, Skeleton } from '@designSystem';
import { Footer, Header } from './ListBalances.styles';
import { BalanceLoading } from '@components/Balance';

const Loading: React.FC = () => {
  return (
    <Containers.CardContainer>
      <Card $mobileHeight="560px">
        <Header></Header>
        <Containers.OverflowContainer>
          <BalanceLoading />
        </Containers.OverflowContainer>
        <Footer>
          <Skeleton $width={150} $height={35} />
        </Footer>
      </Card>
    </Containers.CardContainer>
  );
};

export default Loading;
