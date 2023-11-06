import React, { useState } from 'react';
import FetcherKeys from '@constants/FetcherKeys';
import BffEndpoints from '@constants/BffEndpoints';
import Container from '@components/Container';
import { OverviewCard } from './Overview.styles';
import useFetch from '@hooks/useFetch';
import fetchBff from '@utils/fetchBff';
import { Notification, Toast } from '@designSystem';

const institutionId = 'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2';

const Overview: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast | {}>({});

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
          <h1>{data.totalLoss}</h1>

          <button onClick={handleResync}>Resync</button>
        </OverviewCard>
      </Container>
    </>
  );
};

export default Overview;
