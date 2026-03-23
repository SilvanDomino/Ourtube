import styles from './sidenav.module.css';
import { House } from 'lucide-react';
import { Layers2 } from 'lucide-react';
import { UserCheck } from 'lucide-react';
import { History } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { TrendingUp } from 'lucide-react'; 

export function Sidenav() {
  return (
    <nav className={styles.sidenav}>
      <div className={`${styles.sidenav__item} ${styles['sidenav__item--active']}`}>
        <span className={styles.sidenav__icon}><House /></span> 
        Home
      </div>
      <div className={styles.sidenav__item}>
        <span className={styles.sidenav__icon}><Layers2 /></span>
        Shorts
      </div>
      <div className={styles.sidenav__item}>
        <span className={styles.sidenav__icon}><UserCheck /></span>
        Subscriptions
      </div>

      <div className={styles.sidenav__divider} />

      <div className={styles.sidenav__item}>
        <span className={styles.sidenav__icon}><History /></span>
        History
      </div>
      <div className={styles.sidenav__item}>
        <span className={styles.sidenav__icon}><ThumbsUp /></span>
        Liked videos
      </div>
      <div className={styles.sidenav__item}>
        <span className={styles.sidenav__icon}><TrendingUp /></span>
        Trending
      </div>
    </nav>
  );
}
