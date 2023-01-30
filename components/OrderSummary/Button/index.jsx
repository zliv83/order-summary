import styles from './Button.module.scss';

export default function Button({ children }) {
  return <div className={styles.button}>{children}</div>;
}
