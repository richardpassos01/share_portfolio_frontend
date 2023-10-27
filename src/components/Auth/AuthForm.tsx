import React, { useState } from 'react';
import { Button, Input } from '@designSystem';
import { ErrorContainer, Form, SubmitContainer } from './Auth.styles';

type Props = {
  submitError: string;
  setSubmitError: Function;
  submit: (username: string, password: string) => Promise<void>;
};

const AuthForm: React.FC<Props> = ({ submitError, setSubmitError, submit }) => {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameBlur = () => {
    setUsernameError('');

    if (!usernameValue) {
      return setUsernameError('Campo obrigatório');
    }
  };

  const handlePasswordBlur = () => {
    setPasswordError('');

    if (!passwordValue) {
      setPasswordError('Campo obrigatório');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleUsernameBlur();
    handlePasswordBlur();

    if (!usernameError && !passwordError && usernameValue && passwordValue) {
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

      {Boolean(submitError) && <ErrorContainer>{submitError}</ErrorContainer>}

      <SubmitContainer>
        <Button type="submit" height="45" disabled={true}>
          Login
        </Button>
      </SubmitContainer>
    </Form>
  );
};
export default AuthForm;
