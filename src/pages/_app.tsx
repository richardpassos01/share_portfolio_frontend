import NextScript from "next/script";
import Providers from "../components/Providers/Providers";

export default function App({ Component, pageProps }) {
    return (
       <Providers>
          <h1>ola</h1>
         <Component {...pageProps} />
          <NextScript />
          </Providers>
    );
}