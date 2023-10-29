import React from 'react';
import { AppBar } from '@components/AppBar';
import HeaderPages from '@constants/HeaderPages';
import { TransactionsTable } from '@components/TransactionsTable';

const Transactions: React.FC = () => {
  return (
    <div>
      <AppBar currentPage={HeaderPages.TRANSACTIONS} />
      <TransactionsTable />
    </div>
  );
};

export default Transactions;
