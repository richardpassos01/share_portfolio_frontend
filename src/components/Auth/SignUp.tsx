import React, { useRef } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Container } from './Auth.styles';

type Props = {
  className?: string;
  callbackUrl?: string;
  error?: string;
};

const SignUp = (props: Props) => {
  const router = useRouter();
  const userName = useRef('');
  const pass = useRef('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      username: userName.current,
      password: pass.current,
      redirect: false,
    });

    if (res?.error) {
      window.alert('error');
    }

    if (!res?.error) {
      router.push(props.callbackUrl ?? 'http://localhost:3000/dashboard');
    }
  };

  return <Container></Container>;
};

export default SignUp;
