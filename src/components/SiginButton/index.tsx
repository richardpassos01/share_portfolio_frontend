'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const SigninButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <button
          onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}
          className="text-red-600"
        >
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <Link href={'/auth/signin'} className="flex gap-4 ml-auto text-green-600">
      Sign In
    </Link>
  );
};

export default SigninButton;
