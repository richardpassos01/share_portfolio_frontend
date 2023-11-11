import React from 'react';
import { AppBar } from '@components/AppBar';
import { Overview } from '@components/Overview';
import HeaderPages from '@constants/HeaderPages';
import BffEndpoints from '@constants/BffEndpoints';
import useFetch from '@hooks/useFetch';
import { useRouter } from 'next/router';
import Routes from '@constants/Routes';

const Dashboard: React.FC = () => {
  const router = useRouter();
  const userId = 'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2';

  const { data, isLoading } = useFetch(
    BffEndpoints.LIST_INSTITUTIONS.replace(':userId', userId) as BffEndpoints,
    'GET',
  );

  if (isLoading) return <>loading</>;
  if (!data) router.push(Routes.INSTITUTION);

  return (
    <div>
      <AppBar currentPage={HeaderPages.DASHBOARD} />
      <Overview />
    </div>
  );
};

export default Dashboard;
