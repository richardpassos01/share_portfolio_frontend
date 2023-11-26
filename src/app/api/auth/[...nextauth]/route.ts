import { SharePortfolioAdapter } from '@adapters/sharePortfolio';
import Providers from '@constants/Providers';
import NextAuth, { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const MINUTE = 60;
const HOUR = 60 * MINUTE;

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: Providers.SIGNUP_PROVIDER,
      name: Providers.SIGNUP_PROVIDER,
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const userId = 'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2';

        return {
          id: userId,
          name: credentials?.username,
        } as any;
      },
    }),
    CredentialsProvider({
      id: Providers.SIGNIN_PROVIDER,
      name: Providers.SIGNIN_PROVIDER,
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(
        credentials: Record<'username' | 'password', string> | undefined,
        req,
      ) {
        if (
          credentials?.username === 'user' &&
          credentials.password === 'pass'
        ) {
          const userId = 'c1daef5f-4bd0-4616-bb62-794e9b5d8ca2';

          return {
            id: userId,
            name: credentials?.username,
          } as User;
        }

        return null;
      },
    }),
  ],
  session: {
    maxAge: 8 * HOUR, // 8 hours
  },
  callbacks: {
    async session({ session, token }) {
      let institutions = [];

      if (token.sub) {
        institutions = await SharePortfolioAdapter.listInstitutions(token.sub);

        const user = {
          id: token.sub,
          username: token.name,
          institutions,
        };

        session.user = user as User;
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
