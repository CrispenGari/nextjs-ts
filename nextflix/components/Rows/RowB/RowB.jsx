import styles from "./RowB.module.css";
import { HiDownload } from "react-icons/hi";
import { GiSmartphone } from "react-icons/gi";
import { useState, useEffect } from "react";
const RowB = () => {
  const [changeIcon, setChangeIcon] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (changeIcon === 1) {
        setChangeIcon(0);
      } else {
        setChangeIcon(1);
      }
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [changeIcon]);
  return (
    <div className={styles.row__b}>
      <div className={styles.row__b__right}>
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
        <div className={styles.row__b__right__card}>
          <img src="  https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
          <div>
            <h3>Stranger Things</h3>
            <p>Downloading...</p>
          </div>
          {changeIcon ? (
            <HiDownload className={styles.row__b__card__icon} />
          ) : (
            <GiSmartphone className={styles.row__b__card__icon__blue} />
          )}
        </div>
      </div>
      <div className={styles.row__b__left}>
        <h1> Download your shows to watch offline.</h1>
        <h2>Save your favorites easily and always have something to watch</h2>
      </div>
    </div>
  );
};

export default RowB;
