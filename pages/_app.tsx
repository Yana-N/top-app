import {AppProps} from "next/dist/shared/lib/router/router";
import '../styles/globals.css';
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>MyTop is the best app</title>
      <meta name="description" content="MyTop"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <Component {...pageProps} />;
  </>;
}

export default MyApp;
