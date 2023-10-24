import React from 'react';
import Login from '@components/Login';
import { Header } from '@designSystem';

type Props = {
  searchParams?: Record<'callbackUrl' | 'error', string>;
};

const SignInPage = (props: Props) => {
  return (
    <>
      <Header />
      <Login
        error={props.searchParams?.error}
        callbackUrl={props.searchParams?.callbackUrl}
      />
    </>
  );
};

export default SignInPage;
