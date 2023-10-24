import React from 'react';
import SigninButton from '../SiginButton';
import { Header } from '@designSystem';

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
