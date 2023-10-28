import Providers from '@constants/Providers';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export interface User {
  id: string;
  username: string;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: Providers.SIGNUP_PROVIDER,
      name: Providers.SIGNUP_PROVIDER,
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        return {
          id: '1',
          username: credentials?.username,
        } as User;
      },
    }),
    CredentialsProvider({
      id: Providers.SIGNIN_PROVIDER,
      name: Providers.SIGNIN_PROVIDER,
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (
          credentials?.username === 'user' &&
          credentials.password === 'pass'
        ) {
          return {
            id: '1',
            username: credentials.username,
          } as User;
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
