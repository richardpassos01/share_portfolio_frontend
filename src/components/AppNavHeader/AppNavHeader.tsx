import React from 'react';
import { Nav } from '@designSystem';
import Routes from '@constants/Routes';
import { useRouter } from 'next/router';

export enum NavHeaderPages {
  DASHBOARD = 'Dashboard',
  TRANSACTIONS = 'Transactions',
}

interface Props {
  currentPage: NavHeaderPages;
}

const AppNavHeader: React.FC<Props> = ({ currentPage }) => {
  const router = useRouter();

  const handleOnClick = async (route: Routes) => {
    router.push(route);
  };

  return (
    <Nav.Header>
      <Nav.Item
        name={NavHeaderPages.DASHBOARD}
        activated={currentPage}
        onClick={() => handleOnClick(Routes.DASHBOARD)}
      />
      <Nav.Item
        name={NavHeaderPages.TRANSACTIONS}
        activated={currentPage}
        onClick={() => handleOnClick(Routes.TRANSACTIONS)}
      />
    </Nav.Header>
  );
};

export default AppNavHeader;
