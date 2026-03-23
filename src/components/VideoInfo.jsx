import styles from './videoInfo.module.css';

export function VideoInfo() {
  return (
    <div className={styles.videoInfo}>
      <div className={styles.video_title}>
        <h1 className={styles.video_titleText}>
        Monkey jumping on car
        </h1>
      </div>
      <div className={styles.video_data}>
        channnel name
      </div>
      <div className={styles.video_desc}>
        description
      </div>
    </div>
  );
};
