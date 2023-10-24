import React from 'react';
import SigninButton from '../SiginButton';
import { Button, Header } from '@designSystem';

interface Props {
  boxShadown?: boolean;
}

const AppBar: React.FC<Props> = ({ boxShadown }) => {
  return (
    <Header boxShadown={boxShadown}>
      <SigninButton />
    </Header>
  );
};

export default AppBar;
