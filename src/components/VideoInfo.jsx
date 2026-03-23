import styles from './videoInfo.module.css';

export function VideoInfo() {
  return (
    <div className={styles.videoInfo}>
      <div className={styles.video_title}>
        <h1 className={styles.video_titleText}>
        Nothing But Thieves - Amsterdam (Official Video)
        </h1>
      </div>
      <div className={styles.video_data}>
        <div>
          <div className={styles.channelInfo}>
            <img src="../src/assets/img/unnamed.jpg" className={styles.profile}/>
            <div className={styles.channelText}>
              <h1 className={styles['channel-name']}>Monkey</h1>
              <h3 className={styles['subscriber-count']}>6,43 mln. subscribers</h3>
            </div>
              <div className={styles['subscribe-button']}>Subscribe</div>
          </div>
        </div>
      </div>
      <div className={styles.video_desc}>
        description
      </div>
    </div>
  );
};
