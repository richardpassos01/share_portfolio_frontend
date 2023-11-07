import React, { useState } from 'react';
import FetcherKeys from '@constants/FetcherKeys';
import BffEndpoints from '@constants/BffEndpoints';
import Container from '@components/Container';
import {
  Body,
  BodyItem,
  Footer,
  Header,
  HeaderTitle,
  OverviewCard,
} from './Overview.styles';
import useFetch from '@hooks/useFetch';
import fetchBff from '@utils/fetchBff';
import { Button, Colors, HyperLink, Notification, Toast } from '@designSystem';
import { useRouter } from 'next/router';
import Routes from '@constants/Routes';

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
        message: 'Deu tudo certo!',
        type: 'success',
      });
    } catch (error) {
      setIsSubmitting(false);
      setToast({
        message: 'Alguma coisa deu errada!',
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
      <Container>
        <OverviewCard>
          <Header>
            <HeaderTitle>
              <span>Perda total:</span>
              <span>{data.totalLoss}</span>
            </HeaderTitle>

            <HeaderTitle>
              <span>Lucro total:</span>
              <span>{data.totalNetEarning}</span>
            </HeaderTitle>

            <HeaderTitle>
              <span>Lucro desse mês:</span>
              <span>{data.currentNetEarning}</span>
            </HeaderTitle>
          </Header>
          <Body>
            <h1>Situação do mes {data.previousMonthBalance.yearMonth}</h1>
            <BodyItem>
              <span>Lucro: </span>
              <span>{data.previousMonthBalance.netEarning}</span>
            </BodyItem>

            <BodyItem>
              <span>Perda: </span>
              <span>{data.previousMonthBalance.loss}</span>
            </BodyItem>

            <BodyItem>
              <span>Ganhos com compra/venda </span>
              <span>{data.previousMonthBalance.tradeEarning}</span>
            </BodyItem>

            <BodyItem>
              <span>Ganhos com dividendos</span>
              <span>{data.previousMonthBalance.dividendEarning}</span>
            </BodyItem>

            <BodyItem>
              <span>Imposto retido na fonte: </span>
              <span>{data.previousMonthBalance.taxWithholding}</span>
            </BodyItem>

            <BodyItem>
              <span>Imposto restante devido: </span>
              <span>{data.previousMonthBalance.tax}</span>
            </BodyItem>
          </Body>

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
        </OverviewCard>
      </Container>
    </>
  );
};

export default Overview;
