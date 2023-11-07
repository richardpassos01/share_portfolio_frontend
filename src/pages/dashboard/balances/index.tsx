import React, { useState } from 'react';
import { AppBar } from '@components/AppBar';
import HeaderPages from '@constants/HeaderPages';
import { useRouter } from 'next/router';
import Routes from '@constants/Routes';

const ListMonthlyBalances: React.FC = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRedirect = () => {
    router.push(Routes.DASHBOARD);
  };

  return (
    <div>
      <AppBar currentPage={HeaderPages.DASHBOARD} />
      <h1>lista</h1>
    </div>
  );
};

export default ListMonthlyBalances;
