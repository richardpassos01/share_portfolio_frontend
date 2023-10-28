import React from 'react';
import SigninButton from '../SiginButton';
import { Hamburger, Header } from '@designSystem';
import Routes from '@constants/Routes';
import { Hide, Tokens } from '@designSystem';
import { useSession } from 'next-auth/react';

interface Props {
  boxShadown?: boolean;
}

const HamburgerMenu: React.FC = () => {
  return (
    <Hide on={Tokens.MIN_WIDTH_TABLET}>
      <Hamburger.Menu>
        <Hamburger.Item name="Entrar" href={Routes.SIGNIN} />
        <Hamburger.Item name="Cadastrar" href={Routes.SIGNUP} />
      </Hamburger.Menu>
    </Hide>
  );
};

const AppBar: React.FC<Props> = ({ boxShadown }) => {
  const { data: session } = useSession();

  return (
    <Header boxShadown={boxShadown}>
      <Hide on={Tokens.MAX_WIDTH_MOBILE}>
        <SigninButton />
      </Hide>
      {(!session?.user && <HamburgerMenu />) || <></>}
    </Header>
  );
};

export default AppBar;
