import Head from 'next/head';

// eslint-disable-next-line import/extensions
import OrderSummary from '@/components/OrderSummary';

import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className={styles.container}>
        <OrderSummary />
      </div>
    </div>
  );
}
