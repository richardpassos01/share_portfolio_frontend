import React from 'react';
import { Button, Colors, SelectBox } from '@designSystem';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Routes from '@constants/Routes';
import { LoggedOutContainer, LoggedContainer } from './styles';
import { Session } from 'next-auth';
import { useInstitution } from '@hooks/useInstitution';
import Labels from '@constants/Labels';

interface props {
  session: Session | null;
}

const SignInOutButton: React.FC<props> = ({ session }) => {
  const router = useRouter();
  const { institution, setInstitution } = useInstitution();

  const handleOptions = (option: Record<string, string>, close: () => void) => {
    if (option.name === Labels.ADD_INSTITUTION) {
      return handleRedirect(Routes.INSTITUTION);
    }

    setInstitution(option);
    return close();
  };

  const handleRedirect = (route: Routes) => {
    router.push(route);
  };

  if (session?.user) {
    return (
      <LoggedContainer $hasInstitutions={Boolean(institution.name)}>
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
        {institution.name ? (
          <SelectBox
            label={institution.name}
            arrayOfObjects={[
              ...session?.user?.institutions,
              { name: Labels.ADD_INSTITUTION },
            ]}
            handleOptions={handleOptions}
            $width="150"
          />
        ) : (
          <></>
        )}
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
