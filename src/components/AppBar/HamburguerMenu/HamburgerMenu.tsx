import React from 'react';
import { Hamburger } from '@designSystem';
import Routes from '@constants/Routes';
import { Hide, Tokens } from '@designSystem';
import { signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import HeaderPages from '@constants/HeaderPages';

interface props {
  session: Session | null;
}

const HamburgerMenu: React.FC<props> = ({ session }) => {
  return (
    <Hide on={Tokens.MIN_WIDTH_TABLET}>
      <Hamburger.Menu>
        {session?.user ? (
          <>
            <Hamburger.Item
              name={HeaderPages.DASHBOARD}
              href={Routes.DASHBOARD}
            />
            <Hamburger.Item
              name={HeaderPages.TRANSACTIONS}
              href={Routes.TRANSACTIONS}
            />
            <Hamburger.Item
              name="Logout"
              href={Routes.HOME}
              onClick={() => signOut({ callbackUrl: Routes.HOME })}
            />
          </>
        ) : (
          <>
            <Hamburger.Item name="Entrar" href={Routes.SIGNIN} />
            <Hamburger.Item name="Cadastrar" href={Routes.SIGNUP} />
          </>
        )}
      </Hamburger.Menu>
    </Hide>
  );
};

export default HamburgerMenu;
