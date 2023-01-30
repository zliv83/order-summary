import styles from './AnnualPlan.module.scss';

export default function AnnualPlan() {
  return (
    <div className={styles.plan}>
      <div className={styles.contents}>
        <div className={styles.avatar} />
        <div className={styles.planDetails}>
          <span className={styles.planName}>Annual Plan</span>
          <span className={styles.planPrice}>$59.99/year</span>
        </div>
        <span className={styles.change}>Change</span>
      </div>
    </div>
  );
}
