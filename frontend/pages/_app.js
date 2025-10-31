import '../public/styles.css'; // if you have global styles, or change path accordingly
import '../styles/globals.css'; // common Tailwind path
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Draco Dynasty — SaaS Storefront Starter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
