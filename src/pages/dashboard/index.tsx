import React from 'react';
import { Table } from '@designSystem';
import { AppBar } from '@components/AppBar';
import HeaderPages from '@constants/HeaderPages';

const Dashboard: React.FC = () => {
  return (
    <div>
      <AppBar currentPage={HeaderPages.DASHBOARD} />
    </div>
  );
};

export default Dashboard;
