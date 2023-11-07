import React from 'react';
import { AppBar } from '@components/AppBar';
import HeaderPages from '@constants/HeaderPages';

const ListMonthlyBalances: React.FC = () => {
  return (
    <div>
      <AppBar currentPage={HeaderPages.DASHBOARD} />
      <h1>lista</h1>
    </div>
  );
};

export default ListMonthlyBalances;
