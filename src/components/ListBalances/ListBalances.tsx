import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Routes from '@constants/Routes';
import { Button, Card, Colors, Containers } from '@designSystem';
import useFetch from '@hooks/useFetch';
import BffEndpoints from '@constants/BffEndpoints';
import FetcherKeys from '@constants/FetcherKeys';
import { Balance, BalanceProps } from '@components/Balance';

import styled from 'styled-components';
import { Space } from './ListBalances.styles';

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em 2em 1em 2em;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 3% 2% 4% 2%;

  @media ${(props) => props.theme.tokens.MAX_WIDTH_MOBILE} {
    padding: 10% 0 10% 0;
    justify-content: center;
  }
`;

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
