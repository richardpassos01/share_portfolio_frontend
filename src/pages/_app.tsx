import NextScript from 'next/script';
import { AppProps } from 'next/app';
import { GlobalStyles, Theme } from '@designSystem';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '../lib/registry';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <SessionProvider>
        <ThemeProvider theme={Theme}>
          <GlobalStyles />
          <Component {...pageProps} />
          <NextScript />
        </ThemeProvider>
      </SessionProvider>
    </StyledComponentsRegistry>
  );
}
