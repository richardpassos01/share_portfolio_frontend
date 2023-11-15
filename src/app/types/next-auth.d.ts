import NextAuth from 'next-auth';
import { Institution } from '@adapters/sharePortfolio';

declare module 'next-auth' {
  interface User {
    id: string;
    username: string | null | undefined;
    institutions: Institution[];
  }

  interface Session {
    user: User;
  }
}
