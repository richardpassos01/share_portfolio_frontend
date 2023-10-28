import React, { useState } from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { ImageContainer, Container, FormContainer } from './Auth.styles';
import { Hide, Icons, Tokens, Input, Title } from '@designSystem';
import AuthForm from './AuthForm';
import Messages from '@constants/Messages';
import bff from '@bff';
import Routes from '@constants/Routes';
import Providers from '@constants/Providers';

const SignUp: React.FC = () => {
  const [submitError, setSubmitError] = useState('');

  const onSubmit = async (username: string, password: string) => {
    const user = await bff.signup({ username, password });

    if (!user) {
      return setSubmitError(Messages.SIGNUP_FAILURE);
    }

    return signIn(Providers.SIGNUP_PROVIDER, {
      username,
      password,
      callbackUrl: Routes.DASHBOARD,
    });
  };

  return (
    <Container>
      <Hide on={Tokens.MAX_WIDTH_MOBILE} width="100%">
        <ImageContainer>
          <Image src={Icons.Signup} alt="Signup" width={650} height={600} />
        </ImageContainer>
      </Hide>
      <FormContainer>
        <Title>Faça seu cadastro</Title>
        <AuthForm
          submit={onSubmit}
          setSubmitError={setSubmitError}
          submitError={submitError}
          target="signUp"
        />
      </FormContainer>
    </Container>
  );
};

export default SignUp;
