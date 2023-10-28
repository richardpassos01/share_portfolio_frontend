import React from 'react';
import { Table } from '@designSystem';
import AppBar from '@components/AppBar';

const Dashboard: React.FC = () => {
  return (
    <div>
      <AppBar />
      <h1>Dashboard</h1>
      <Table />
    </div>
  );
};

export default Dashboard;
