import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface User {
  id: string;
  username: string;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
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
            username: 'fake_user',
          } as User;
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
