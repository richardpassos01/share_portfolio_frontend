import React from 'react';
import { Table } from '@designSystem';
import { AppBar } from '@components/AppBar';
import { AppNavHeader, NavHeaderPages } from '@components/AppNavHeader';

const Transactions: React.FC = () => {
  return (
    <div>
      <AppBar />
      <AppNavHeader currentPage={NavHeaderPages.TRANSACTIONS} />
      <h1>Transactions</h1>
      <Table />
    </div>
  );
};

export default Transactions;
