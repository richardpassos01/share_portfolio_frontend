import React, { useState } from 'react';
import { AppBar } from '@components/AppBar';
import HeaderPages from '@constants/HeaderPages';
import { useRouter } from 'next/router';
import Routes from '@constants/Routes';
import Container from '@components/Container';
import { Card, Containers } from '@designSystem';
import useFetch from '@hooks/useFetch';
import BffEndpoints from '@constants/BffEndpoints';
import FetcherKeys from '@constants/FetcherKeys';
import { Balance, BalanceProps } from '@components/Balance';

const institutionId = 'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2';

const ListMonthlyBalances: React.FC = () => {
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

  return (
    <div>
      <AppBar currentPage={HeaderPages.DASHBOARD} />
      <Container>
        <Card>
          <Containers.OverflowContainer>
            {data.map((balance: BalanceProps, index: number) => (
              <Balance balance={balance} key={index} />
            ))}
          </Containers.OverflowContainer>
        </Card>
      </Container>
    </div>
  );
};

export default ListMonthlyBalances;
