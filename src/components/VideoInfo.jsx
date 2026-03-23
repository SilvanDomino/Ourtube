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
        <div className={styles.channelInfo}>
          <img src="../src/assets/img/unnamed.jpg" className={styles.profile} alt="Channel Profile" />
          <div className={styles.channelText}>
            <h1 className={styles['channel-name']}>Monkey</h1>
            <h3 className={styles['subscriber-count']}>6,43 mln. subscribers</h3>
          </div>
          <div className={styles['subscribe-button']}>Subscribe</div>
        </div>
      </div>
      <div className={styles.video_desc}>
        <div className={styles.accordian}>
          <input type="checkbox" id="trigger" className={styles.triggerInput} />
          <label htmlFor="trigger" className={styles.triggerLabel}>
            Monkey jumping on car
            <ul className={styles.info}>
              <li>1.2M Views</li>
              <li>23 maart 2026</li>
            </ul>
          </label>
          <div className={styles.content}>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi, ea at consequatur placeat dicta harum? 
              Cumque, illo at vitae nihil iste iure eos, sint odit repellat ea dolorem quasi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}