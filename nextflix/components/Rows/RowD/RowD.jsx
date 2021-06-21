import styles from "./RowD.module.css";

const RowD = () => {
  return (
    <div className={styles.row__d}>
      <div className={styles.row__d__right}>
        <img src="https://occ-0-3421-32.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" />
      </div>
      <div className={styles.row__d__left}>
        <h1> Watch everywhere.</h1>
        <h2>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV without paying more.
        </h2>
      </div>
    </div>
  );
};

export default RowD;
