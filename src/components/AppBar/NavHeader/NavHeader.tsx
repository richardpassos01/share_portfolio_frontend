import React from 'react';
import { Hide, Nav, Tokens } from '@designSystem';
import Routes from '@constants/Routes';
import { useRouter } from 'next/router';
import HeaderPages from '@constants/HeaderPages';

interface Props {
  currentPage: HeaderPages;
}

const AppNavHeader: React.FC<Props> = ({ currentPage }) => {
  const router = useRouter();

  const handleOnClick = async (route: Routes) => {
    router.push(route);
  };

  return (
    <Hide on={Tokens.MAX_WIDTH_MOBILE}>
      <Nav.Header>
        <Nav.Item
          name={HeaderPages.DASHBOARD}
          activated={currentPage}
          onClick={() => handleOnClick(Routes.DASHBOARD)}
        />
        <Nav.Item
          name={HeaderPages.TRANSACTIONS}
          activated={currentPage}
          onClick={() => handleOnClick(Routes.TRANSACTIONS)}
        />
      </Nav.Header>
    </Hide>
  );
};

export default AppNavHeader;
