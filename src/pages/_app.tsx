import NextScript from 'next/script';
import { AppProps } from 'next/app';
import { GlobalStyles, Theme, StyledComponentsRegistry } from '@designSystem';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';
import Layout from '@components/Layout';
import SetupProvider from '@components/SetupProvider';
import { InstitutionProvider } from '@contexts/InstitituionContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <SessionProvider>
        <ThemeProvider theme={Theme}>
          <SetupProvider>
            <InstitutionProvider>
              <GlobalStyles />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </InstitutionProvider>
          </SetupProvider>
          <NextScript />
        </ThemeProvider>
      </SessionProvider>
    </StyledComponentsRegistry>
  );
}
