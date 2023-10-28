import React from 'react';
import { Header } from '@designSystem';
import { Hide, Tokens } from '@designSystem';
import { useSession } from 'next-auth/react';
import HamburgerMenu from './HamburguerMenu/HamburgerMenu';
import SignInOutButton from './SignInOutButton/SignInOutButton';
import { NavHeader } from './NavHeader';
import HeaderPages from '@constants/HeaderPages';

interface Props {
  boxShadown?: boolean;
  currentPage?: HeaderPages;
}

const AppBar: React.FC<Props> = ({ boxShadown, currentPage }) => {
  const { data: session } = useSession();

  return (
    <>
      <Header $boxShadown={boxShadown}>
        <Hide on={Tokens.MAX_WIDTH_MOBILE}>
          <SignInOutButton session={session} />
        </Hide>
        <HamburgerMenu session={session} />
      </Header>
      {currentPage && <NavHeader currentPage={currentPage} />}
    </>
  );
};

export default AppBar;
