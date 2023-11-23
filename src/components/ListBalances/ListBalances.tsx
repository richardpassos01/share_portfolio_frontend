import React from 'react';
import { useRouter } from 'next/router';
import Routes from '@constants/Routes';
import { Button, Card, Colors, Containers, NotFound } from '@designSystem';
import useFetch from '@hooks/useFetch';
import BffEndpoints from '@constants/BffEndpoints';
import FetcherKeys from '@constants/FetcherKeys';
import { Balance, BalanceProps } from '@components/Balance';

import { Footer, Header, Space } from './ListBalances.styles';
import Loading from './Loading';
import { useInstitution } from '@hooks/useInstitution';

const ListBalances: React.FC = () => {
  const router = useRouter();
  const { institution } = useInstitution();

  const handleRedirect = () => {
    router.push(Routes.DASHBOARD);
  };

  const { data, isLoading } = useFetch(
    BffEndpoints.LIST_MONTHLY_BALANCES.replace(
      ':institutionId',
      institution.id,
    ) as BffEndpoints,
    FetcherKeys.LIST_MONTHLY_BALANCES,
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Containers.CardContainer>
      <Card $mobileHeight="560px" $height="680px">
        <Header></Header>
        {data?.length ? (
          <Containers.OverflowContainer>
            {data.map((balance: BalanceProps, index: number) => (
              <>
                <Balance balance={balance} key={index} />
                <Space />
              </>
            ))}
          </Containers.OverflowContainer>
        ) : (
          <NotFound width={180} height={140} />
        )}
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
