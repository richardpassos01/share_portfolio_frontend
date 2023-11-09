import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Routes from '@constants/Routes';
import { Button, Card, Colors, Containers } from '@designSystem';
import useFetch from '@hooks/useFetch';
import BffEndpoints from '@constants/BffEndpoints';
import FetcherKeys from '@constants/FetcherKeys';
import { Balance, BalanceProps } from '@components/Balance';

import { Footer, Header, Space } from './ListBalances.styles';

const institutionId = 'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2';

const ListBalances: React.FC = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(Routes.DASHBOARD);
  };

  const { data, isLoading } = useFetch(
    BffEndpoints.LIST_MONTHLY_BALANCES.replace(
      ':parentId',
      institutionId,
    ) as BffEndpoints,
    FetcherKeys.LIST_MONTHLY_BALANCES,
  );

  if (isLoading) {
    return <>loading</>;
  }

  if (!data?.length) {
    return <>empty state</>;
  }

  return (
    <Containers.CardContainer>
      <Card $mobileHeight="560px">
        <Header></Header>
        <Containers.OverflowContainer>
          {data.map((balance: BalanceProps, index: number) => (
            <>
              <Balance balance={balance} key={index} />
              <Space />
            </>
          ))}
        </Containers.OverflowContainer>
        <Footer>
          <Button
            $width="150"
            $height="42"
            $backgroundColor={Colors.white}
            $color={Colors.darkBlue}
            $borderColor={Colors.darkBlue}
            onClick={handleRedirect}
          >
            Voltar
          </Button>
        </Footer>
      </Card>
    </Containers.CardContainer>
  );
};

export default ListBalances;
