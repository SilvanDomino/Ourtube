import styles from './sidenav.module.css';
import History from '../assets/icons/clock-rotate-left-solid-full.svg';

export function Sidenav() {
  return (
    <nav className={styles.sidenav}>
      Sidenav Component
      <div className={styles.FlexButton}>
        <p className={styles.HistoryText}>history </p>
        <img className={styles.HistoryIcon} src={History} alt='History'/>
      </div>
    </nav>
  );
};
