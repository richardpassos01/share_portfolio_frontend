import React from 'react';
import { AppBar } from '@components/AppBar';
import HeaderPages from '@constants/HeaderPages';
import Transactions from '@components/Transactions';

const AddTransactions: React.FC = () => {
  return (
    <div>
      <AppBar currentPage={HeaderPages.TRANSACTIONS} />
      <Transactions.Add />
    </div>
  );
};

export default AddTransactions;
