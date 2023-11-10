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

  const handleClick = (route: Routes) => {
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
          options={['Banco Inter']}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
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
    </LoggedOutContainer>
  );
};

export default SignInOutButton;
