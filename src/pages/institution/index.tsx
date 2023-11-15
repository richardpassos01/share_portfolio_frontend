import React from 'react';
import { AppBar } from '@components/AppBar';
import Institutions from '@components/Institutions';

const Institution: React.FC = () => {
  return (
    <div>
      <AppBar />
      <Institutions.Add />
    </div>
  );
};

export default Institution;
