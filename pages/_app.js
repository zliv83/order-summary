/* eslint-disable camelcase */
import Head from 'next/head';
import { Red_Hat_Display } from '@next/font/google';

import '@/styles/globals.scss';

const mont = Red_Hat_Display({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no"
        />
      </Head>
      <main id="modal-root" className={mont.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
