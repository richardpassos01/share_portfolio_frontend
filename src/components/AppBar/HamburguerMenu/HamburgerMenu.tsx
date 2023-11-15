import React, { useState } from 'react';
import { Hamburger } from '@designSystem';
import Routes from '@constants/Routes';
import { Hide, Tokens } from '@designSystem';
import { signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import HeaderPages from '@constants/HeaderPages';
import { useInstitution } from '@hooks/useInstitution';
import { useRouter } from 'next/router';
import Labels from '@constants/Labels';

interface props {
  session: Session | null;
  currentPage?: HeaderPages;
}

const HamburgerMenu: React.FC<props> = ({ session, currentPage }) => {
  const { institution, setInstitution } = useInstitution();
  const router = useRouter();

  const handleClick = (item: Record<string, string>) => {
    if (item.name === Labels.ADD_INSTITUTION) {
      return router.push(Routes.INSTITUTION);
    }

    setInstitution(item);
  };

  return (
    <Hide on={Tokens.MIN_WIDTH_TABLET}>
      <Hamburger.Menu>
        {session?.user ? (
          <>
            <Hamburger.MultiLevelItem
              name={institution.name}
              items={
                [
                  ...session?.user?.institutions,
                  { name: Labels.ADD_INSTITUTION },
                ] as Record<string, string>[]
              }
              onClick={handleClick}
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
