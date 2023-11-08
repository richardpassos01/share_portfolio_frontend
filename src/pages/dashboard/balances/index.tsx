import React, { useState } from 'react';
import { AppBar } from '@components/AppBar';
import HeaderPages from '@constants/HeaderPages';

import { ListBalances } from '@components/ListBalances';

const Balances: React.FC = () => {
  return (
    <div>
      <AppBar currentPage={HeaderPages.DASHBOARD} />
      <ListBalances />
    </div>
  );
};

export default Balances;
