import React from 'react';
import { Header } from '@designSystem';
import { Hide, Tokens } from '@designSystem';
import { useSession } from 'next-auth/react';
import HamburgerMenu from './HamburgerMenu';
import SignInOutButton from './SignInOutButton';

interface Props {
  boxShadown?: boolean;
}

const AppBar: React.FC<Props> = ({ boxShadown }) => {
  const { data: session } = useSession();

  return (
    <Header $boxShadown={boxShadown}>
      <Hide on={Tokens.MAX_WIDTH_MOBILE}>
        <SignInOutButton session={session} />
      </Hide>
      <HamburgerMenu session={session} />
    </Header>
  );
};

export default AppBar;
