import React from 'react';
import { AppBar } from '@components/AppBar';
import { Portfolio } from '@components/Portfolio';
import HeaderPages from '@constants/HeaderPages';

const Dashboard: React.FC = () => {
  return (
    <div>
      <AppBar currentPage={HeaderPages.DASHBOARD} />
      <Portfolio />
    </div>
  );
};

export default Dashboard;
