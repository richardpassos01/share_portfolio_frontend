import React, { useState, useEffect } from 'react';
import { Button, Colors, HyperLink, Input, Paragraph } from '@designSystem';
import {
  ErrorContainer,
  RedirectContainer,
  Form,
  SubmitContainer,
} from './Auth.styles';
import Messages from '@constants/Messages';
import Routes from '@constants/Routes';
import { useRouter } from 'next/router';

type Props = {
  submitError: string;
  setSubmitError: Function;
  target: 'signIn' | 'signUp';
  submit: (username: string, password: string) => Promise<void>;
};

const RedirectTexts = {
  signUp: {
    paragraph: 'Já possui uma conta?',
    link: 'Fazer login',
    submit: 'Cadastrar',
    redirectTo: Routes.SIGNIN,
  },
  signIn: {
    paragraph: 'Novo na plataforma?',
    link: 'Criar conta',
    submit: 'Acessar',
    redirectTo: Routes.SIGNUP,
  },
};

const AuthForm: React.FC<Props> = ({
  submitError,
  setSubmitError,
  submit,
  target,
}) => {
  const router = useRouter();
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleSignUp = () => {
    router.push(RedirectTexts[target].redirectTo);
  };

  useEffect(() => {
    if (!usernameError && !passwordError && usernameValue && passwordValue) {
      return setIsSubmitDisabled(false);
    }

    return setIsSubmitDisabled(true);
  }, [usernameError, passwordError, usernameValue, passwordValue]);

  const handleUsernameBlur = () => {
    setUsernameError('');

    if (!usernameValue) {
      setUsernameError(Messages.MISSING_FIELD);
    }
  };

  const handlePasswordBlur = () => {
    setPasswordError('');

    if (!passwordValue) {
      setPasswordError(Messages.MISSING_FIELD);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleUsernameBlur();
    handlePasswordBlur();

    if (!isSubmitDisabled) {
      submit(usernameValue, passwordValue);
    }
  };

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFunction: Function,
  ) => {
    const value = event.target.value;
    setFunction(value);
    setSubmitError('');
  };

  return (
    <>
      {submitError ? (
        <ErrorContainer>
          <Paragraph color={Colors.red}>{submitError}</Paragraph>
        </ErrorContainer>
      ) : (
        <></>
      )}

      <Form onSubmit={handleSubmit}>
        <Input.Username
          value={usernameValue}
          onChange={(e) => handleOnChange(e, setUsernameValue)}
          onBlur={handleUsernameBlur}
          error={usernameError}
        />
        <Input.Password
          value={passwordValue}
          onChange={(e) => handleOnChange(e, setPasswordValue)}
          onBlur={handlePasswordBlur}
          error={passwordError}
        />
        <SubmitContainer>
          <Button type="submit" height="45" disabled={isSubmitDisabled}>
            {RedirectTexts[target].submit}
          </Button>
        </SubmitContainer>
      </Form>

      <RedirectContainer>
        <Paragraph color={Colors.gray}>
          {RedirectTexts[target].paragraph}
        </Paragraph>
        <HyperLink color={Colors.blue} fontSize="14" onClick={handleSignUp}>
          {RedirectTexts[target].link}
        </HyperLink>
      </RedirectContainer>
    </>
  );
};

export default AuthForm;
