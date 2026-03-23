import styles from './videoInfo.module.css';

export function VideoInfo() {
  return (
    <div class={styles.accordian}>
    <input type="checkbox" id="trigger"/>
    <label for="trigger">
      Monkey jumping on car
      <ul class={styles.info}>
        <li>1.2M Views</li>
        <li>23 maart 2026</li>
      </ul>
    </label>
        <div className={styles.content}>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi, ea at consequatur placeat dicta harum? Cumque, illo at vitae nihil iste iure eos, sint odit repellat ea dolorem quasi!
          </p>
        </div>
        <div>
      </div>
    </div>
  );
};
