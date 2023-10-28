import React from 'react';
import { NavHeader, Table } from '@designSystem';
import { AppBar } from '@components/AppBar';

const Dashboard: React.FC = () => {
  return (
    <div>
      <AppBar />
      <NavHeader />
      <h1>Dashboard</h1>
      <Table />
    </div>
  );
};

export default Dashboard;
