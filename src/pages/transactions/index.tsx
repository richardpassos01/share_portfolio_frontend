import React from 'react';
import { Table } from '@designSystem';
import { AppBar } from '@components/AppBar';
import HeaderPages from '@constants/HeaderPages';

const Transactions: React.FC = () => {
  return (
    <div>
      <AppBar currentPage={HeaderPages.TRANSACTIONS} />
      <h1>Transactions</h1>
      <Table />
    </div>
  );
};

export default Transactions;
