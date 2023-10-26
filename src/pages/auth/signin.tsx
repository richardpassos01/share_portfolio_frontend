import React from 'react';
import { SignIn } from '@components/Auth';
import { Header } from '@designSystem';

type Props = {
  searchParams?: Record<'callbackUrl' | 'error', string>;
};

const SignInPage = (props: Props) => {
  return (
    <>
      <Header />
      <SignIn
        error={props.searchParams?.error}
        callbackUrl={props.searchParams?.callbackUrl}
      />
    </>
  );
};

export default SignInPage;
