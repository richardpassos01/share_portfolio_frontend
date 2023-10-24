import NextScript from 'next/script';
import { AppProps } from 'next/app';
import { GlobalStyles, Theme, StyledComponentsRegistry } from '@designSystem';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';

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
