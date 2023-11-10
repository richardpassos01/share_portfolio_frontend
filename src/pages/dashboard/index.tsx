import React from 'react';
import { AppBar } from '@components/AppBar';
import { Overview } from '@components/Overview';
import HeaderPages from '@constants/HeaderPages';

const Dashboard: React.FC = () => {
  return (
    <div>
      <AppBar currentPage={HeaderPages.DASHBOARD} />
      <Overview />
    </div>
  );
};

export default Dashboard;
