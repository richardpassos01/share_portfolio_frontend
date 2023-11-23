import React, { useState } from 'react';
import FetcherKeys from '@constants/FetcherKeys';
import BffEndpoints from '@constants/BffEndpoints';
import {
  Footer,
  Header,
  HeaderDescription,
  HeaderTitle,
  HeaderMoney,
  LinkContainer,
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
  NotFound,
} from '@designSystem';
import { useRouter } from 'next/router';
import Routes from '@constants/Routes';
import { Balance } from '@components/Balance';
import { ToastMessages } from '@constants/ToastMessages';
import Loading from './Loading';
import { useInstitution } from '@hooks/useInstitution';

const Overview: React.FC = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast | {}>({});
  const { institution } = useInstitution();

  const handleRedirect = () => {
    router.push(Routes.LIST_MONTHLY_BALANCES);
  };

  const handleResync = async () => {
    if (isSubmitting) return;
    try {
      setIsSubmitting(true);

      await fetchBff(
        BffEndpoints.RESYNC.replace(
          ':institutionId',
          institution.id,
        ) as BffEndpoints,
        'POST',
        data,
      );

      setToast({
        message: ToastMessages.SUCCESS,
        type: 'success',
      });
    } catch (error) {
      setToast({
        message: ToastMessages.ERROR,
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const { data, isLoading } = useFetch(
    BffEndpoints.GET_OVERVIEW.replace(
      ':institutionId',
      institution.id,
    ) as BffEndpoints,
    FetcherKeys.GET_OVERVIEW,
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Notification toast={toast as Toast} />
      <Containers.CardContainer>
        <Card $height="100%">
          {data ? (
            <>
              <Header>
                <HeaderTitle>
                  <HeaderDescription>Perda acumulada</HeaderDescription>
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
            </>
          ) : (
            <NotFound width={180} height={140} mobileMarginTop={50} />
          )}
          <Footer>
            <Button
              $width="150"
              $height="42"
              $backgroundColor={Colors.white}
              $color={Colors.darkBlue}
              $borderColor={Colors.darkBlue}
              onClick={handleResync}
              $isLoading={isSubmitting}
            >
              Sincronizar
            </Button>

            <LinkContainer>
              <HyperLink
                $color={Colors.blue}
                $fontSize="14"
                $width="180px"
                onClick={handleRedirect}
              >
                Visualizar tudo
              </HyperLink>
            </LinkContainer>
          </Footer>
        </Card>
      </Containers.CardContainer>
    </>
  );
};

export default Overview;
