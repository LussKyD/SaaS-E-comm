// pages/_app.js
import '../styles/globals.css';  // ✅ Tailwind entry point
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