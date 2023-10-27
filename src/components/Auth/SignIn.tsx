import React, { useState } from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ImageContainer, Container, FormContainer } from './Auth.styles';
import { Hide, Icons, Tokens, Input, Title } from '@designSystem';
import AuthForm from './AuthForm';
import Routes from '@constants/Routes';

const SignIn: React.FC = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState('');

  const onSubmit = async (username: string, password: string) => {
    const response = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    if (response?.error) {
      setSubmitError('Usuario ou senha inválidos');
    }

    if (!response?.error) {
      router.push(Routes.DASHBOARD);
    }
  };

  return (
    <Container>
      <Hide on={Tokens.MAX_WIDTH_MOBILE} width="100%">
        <ImageContainer>
          <Image src={Icons.Signin} alt="signin" width={650} height={600} />
        </ImageContainer>
      </Hide>
      <FormContainer>
        <Title>Bem vindo</Title>
        <AuthForm
          submit={onSubmit}
          setSubmitError={setSubmitError}
          submitError={submitError}
        />
      </FormContainer>
    </Container>
  );
};

export default SignIn;
