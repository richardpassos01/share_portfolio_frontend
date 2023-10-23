import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default withAuth(
  function middleware(req: NextRequest & { nextauth: { token: any } }) {
    if (
      (req.nextUrl.pathname === '/' && req.nextauth.token) ||
      (req.nextUrl.pathname.startsWith('/auth') && req.nextauth.token)
    ) {
      const url = `${req.nextUrl.origin}/dashboard`;
      return NextResponse.redirect(url);
    }
  },
  {
    callbacks: {
      authorized: async ({ req, token }) => {
        const pathname = req.nextUrl.pathname;

        if (token) {
          return true;
        }

        if (pathname.startsWith('/auth') || pathname === '/') {
          return true;
        }

        return false;
      },
    },
    pages: {
      signIn: '',
    },
  },
);
