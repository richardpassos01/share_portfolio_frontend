import React, { useState } from 'react';
import FetcherKeys from '@constants/FetcherKeys';
import BffEndpoints from '@constants/BffEndpoints';
import {
  Footer,
  Header,
  HeaderDescription,
  HeaderTitle,
  HeaderMoney,
} from './Overview.styles';
import useFetch from '@hooks/useFetch';
import fetchBff from '@utils/fetchBff';
import {
  Button,
  Colors,
  HyperLink,
  Notification,
  Toast,
  Card,
  Containers,
} from '@designSystem';
import { useRouter } from 'next/router';
import Routes from '@constants/Routes';
import { Balance } from '@components/Balance';
import { ToastMessages } from '@constants/ToastMessages';

const institutionId = 'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2';

const Overview: React.FC = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast | {}>({});

  const handleRedirect = () => {
    router.push(Routes.LIST_MONTHLY_BALANCES);
  };

  const handleResync = async () => {
    if (isSubmitting) return;
    try {
      setIsSubmitting(true);

      await fetchBff(
        BffEndpoints.RESYNC.replace(':parentId', institutionId) as BffEndpoints,
        'POST',
        data,
      );

      setToast({
        message: ToastMessages.SUCCESS,
        type: 'success',
      });
    } catch (error) {
      setIsSubmitting(false);
      setToast({
        message: ToastMessages.ERROR,
        type: 'error',
      });
    }
  };

  const { data, isLoading } = useFetch(
    BffEndpoints.GET_OVERVIEW.replace(
      ':parentId',
      institutionId,
    ) as BffEndpoints,
    FetcherKeys.GET_OVERVIEW,
  );

  if (isLoading) {
    return <>loading</>;
  }

  return (
    <>
      <Notification toast={toast as Toast} />
      <Containers.CardContainer>
        <Card>
          <Header>
            <HeaderTitle>
              <HeaderDescription>Perda total</HeaderDescription>
              <HeaderMoney>{data.totalLoss}</HeaderMoney>
            </HeaderTitle>

            <HeaderTitle>
              <HeaderDescription>Lucro total</HeaderDescription>
              <HeaderMoney>{data.totalNetEarning}</HeaderMoney>
            </HeaderTitle>

            <HeaderTitle>
              <HeaderDescription>Lucro desse mês</HeaderDescription>
              <HeaderMoney>{data.currentNetEarning}</HeaderMoney>
            </HeaderTitle>
          </Header>
          <Balance balance={data.previousMonthBalance} />
          <Footer>
            <Button
              $width="150"
              $height="42"
              $backgroundColor={Colors.white}
              $color={Colors.darkBlue}
              $borderColor={Colors.darkBlue}
              onClick={handleResync}
            >
              Sincronizar
            </Button>

            <HyperLink
              $color={Colors.blue}
              $fontSize="14"
              $width="180px"
              onClick={handleRedirect}
            >
              Visualizar tudo
            </HyperLink>
          </Footer>
        </Card>
      </Containers.CardContainer>
    </>
  );
};

export default Overview;
