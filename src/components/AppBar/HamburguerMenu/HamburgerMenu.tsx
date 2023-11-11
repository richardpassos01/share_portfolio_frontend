import React, { useState } from 'react';
import { Hamburger } from '@designSystem';
import Routes from '@constants/Routes';
import { Hide, Tokens } from '@designSystem';
import { signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import HeaderPages from '@constants/HeaderPages';

interface props {
  session: Session | null;
  currentPage?: HeaderPages;
}

const HamburgerMenu: React.FC<props> = ({ session, currentPage }) => {
  const [selectedOptions, setSelectedOptions] = useState(['Banco Inter']);

  return (
    <Hide on={Tokens.MIN_WIDTH_TABLET}>
      <Hamburger.Menu>
        {session?.user ? (
          <>
            <Hamburger.MultiLevelItem
              name={selectedOptions[0]}
              items={selectedOptions.map((name) => ({ name }))}
              activated={currentPage}
              strong
            />
            <Hamburger.Item
              name={HeaderPages.DASHBOARD}
              href={Routes.DASHBOARD}
              activated={currentPage}
            />
            <Hamburger.Item
              name={HeaderPages.TRANSACTIONS}
              href={Routes.TRANSACTIONS}
              activated={currentPage}
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
