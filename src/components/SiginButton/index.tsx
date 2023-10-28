import React from 'react';
import { Button, Colors } from '@designSystem';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Routes from '@constants/Routes';
import { Container } from './styles';

const SigninButton = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleClick = (route: Routes) => {
    router.push(route);
  };

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <button
          onClick={() => signOut({ callbackUrl: Routes.HOME })}
          className="text-red-600"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <Container>
      <Button
        $width="100"
        $height="42"
        $backgroundColor={Colors.white}
        $color={Colors.darkBlue}
        $borderColor={Colors.darkBlue}
        onClick={() => handleClick(Routes.SIGNIN)}
      >
        Entrar
      </Button>
      <Button
        $width="130"
        $height="42"
        onClick={() => handleClick(Routes.SIGNUP)}
      >
        Cadastrar
      </Button>
    </Container>
  );
};

export default SigninButton;
