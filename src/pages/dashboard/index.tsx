import React from 'react';
import { Table } from '@designSystem';
import { AppBar } from '@components/AppBar';
import { AppNavHeader, NavHeaderPages } from '@components/AppNavHeader';

const Dashboard: React.FC = () => {
  return (
    <div>
      <AppBar />
      <AppNavHeader currentPage={NavHeaderPages.DASHBOARD} />
      <h1>Dashboard</h1>
      <Table />
    </div>
  );
};

export default Dashboard;
