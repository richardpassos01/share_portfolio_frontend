import NextScript from 'next/script';
import { AppProps } from 'next/app';
import Providers from '../components/Providers';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <h1>ola</h1>
      <Component {...pageProps} />
      <NextScript />
    </Providers>
  );
}
