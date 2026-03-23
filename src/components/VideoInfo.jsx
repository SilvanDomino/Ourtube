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
        channnel name
      </div>
      <div className="video_desc">
        description
      </div>
    </div>
  );
};
