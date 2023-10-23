import Link from 'next/link';
import React from 'react';
import SigninButton from '../SiginButton';

const AppBar = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <Link className="transition-colors hover:text-blue-500" href={'/'}>
        App Name
      </Link>
      <SigninButton />
    </header>
  );
};

export default AppBar;
