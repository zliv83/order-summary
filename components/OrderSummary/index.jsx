import AnnualPlan from './AnnualPlan';
import Button from './Button';
import styles from './OrderSummary.module.scss';

export default function OrderSummary() {
  return (
    <div className={styles.card}>
      <div className={styles.image} />
      <div className={styles.contents}>
        <span className={styles.title}>Order Summary</span>
        <span className={styles.subTitle}>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </span>
        <AnnualPlan />
        <Button>Proceed to Payment</Button>
        <span className={styles.cancel}>Cancel Order</span>
      </div>
    </div>
  );
}
