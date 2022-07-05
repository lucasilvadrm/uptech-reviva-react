import { CartProvider } from "contexts/CartContext";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { GlobalStyle } from "styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Reviva Fashion</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <CartProvider>
        <Component {...pageProps} />
        <Script src="https://kit.fontawesome.com/3c39b8c1ad.js"></Script>
      </CartProvider>
    </>
  );
}

export default MyApp;
