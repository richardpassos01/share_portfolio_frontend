import React from 'react';
import { AppBar } from '@components/AppBar';
import HeaderPages from '@constants/HeaderPages';
import Transactions from '@components/Transactions';

const ListTransactions: React.FC = () => {
  return (
    <div>
      <AppBar currentPage={HeaderPages.TRANSACTIONS} />
      <Transactions.List />
    </div>
  );
};

export default ListTransactions;
