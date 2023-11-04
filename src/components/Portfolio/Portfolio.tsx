import React, { useState } from 'react';
import FetcherKeys from '@constants/FetcherKeys';
import BffEndpoints from '@constants/BffEndpoints';
import Container from '@components/Container';
import { PortfolioCard } from './Portfolio.styles';
import useFetch from '@hooks/useFetch';
import fetchBff from '@utils/fetchBff';
import { Notification, Toast } from '@designSystem';

const institutionId = 'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2';

const Portfolio: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast | {}>({});

  const handleResyncPortfolio = async () => {
    if (isSubmitting) return;
    try {
      setIsSubmitting(true);

      await fetchBff(
        BffEndpoints.RESYNC_PORTFOLIO.replace(
          ':parentId',
          institutionId,
        ) as BffEndpoints,
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
    BffEndpoints.GET_PORTFOLIO.replace(
      ':parentId',
      institutionId,
    ) as BffEndpoints,
    FetcherKeys.GET_PORTFOLIO,
  );

  if (isLoading) {
    return <>loading</>;
  }

  return (
    <>
      <Notification toast={toast as Toast} />
      <Container>
        <PortfolioCard>
          <h1>{data.totalLoss}</h1>

          <button onClick={handleResyncPortfolio}>Resync</button>
        </PortfolioCard>
      </Container>
    </>
  );
};

export default Portfolio;
