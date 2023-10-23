import React from 'react';
import Table from '../../components/Table';
import AppBar from '../../components/AppBar/AppBar';

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
