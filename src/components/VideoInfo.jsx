import styles from './videoInfo.module.css';

export function VideoInfo() {
  return (
    <div className={styles.videoInfo}>
      <div className="vide_title">
        <p>
        Monkey jumping on car
        </p>
      </div>
      <div className="video_data">
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
      <div className="video_desc">
        description
      </div>
    </div>
  );
};
