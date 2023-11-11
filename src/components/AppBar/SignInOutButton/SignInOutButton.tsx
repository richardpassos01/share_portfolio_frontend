import React, { useState } from 'react';
import { Button, Colors, SelectBox } from '@designSystem';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Routes from '@constants/Routes';
import { LoggedOutContainer, LoggedContainer } from './styles';
import { Session } from 'next-auth';

interface props {
  session: Session | null;
}

const SignInOutButton: React.FC<props> = ({ session }) => {
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState(['Banco Inter']);

  const handleOptions = (option: string) => {
    if (option === 'Add instituição') {
      return handleRedirect(Routes.INSTITUTION);
    }
  };

  const handleRedirect = (route: Routes) => {
    router.push(route);
  };

  if (session?.user) {
    return (
      <LoggedContainer>
        <Button
          $width="100"
          $height="42"
          $backgroundColor={Colors.white}
          $color={Colors.darkBlue}
          $borderColor={Colors.darkBlue}
          onClick={() => signOut({ callbackUrl: Routes.HOME })}
        >
          Logout
        </Button>
        <SelectBox
          label={selectedOptions[0]}
          options={['Banco Inter', 'Add instituição']}
          selectedOptions={selectedOptions}
          handleOptions={handleOptions}
          $width="150"
        />
      </LoggedContainer>
    );
  }

  return (
    <LoggedOutContainer>
      <Button
        $width="100"
        $height="42"
        $backgroundColor={Colors.white}
        $color={Colors.darkBlue}
        $borderColor={Colors.darkBlue}
        onClick={() => handleRedirect(Routes.SIGNIN)}
      >
        Entrar
      </Button>
      <Button
        $width="130"
        $height="42"
        onClick={() => handleRedirect(Routes.SIGNUP)}
      >
        Cadastrar
      </Button>
    </LoggedOutContainer>
  );
};

export default SignInOutButton;
