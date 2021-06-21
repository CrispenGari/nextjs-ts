import styles from "./RowA.module.css";

const RowA = () => {
  return (
    <div className={styles.row__a}>
      <div className={styles.row__a__left}>
        <h1> Enjoy on your TV.</h1>
        <h2>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </h2>
      </div>
      <div className={styles.row__a__right}>
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
      </div>
    </div>
  );
};

export default RowA;
