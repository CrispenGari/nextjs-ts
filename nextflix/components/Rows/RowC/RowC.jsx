import styles from "./RowC.module.css";

const RowC = () => {
  return (
    <div className={styles.row__c}>
      <div className={styles.row__c__left}>
        <h1> Watch everywhere.</h1>
        <h2>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV without paying more.
        </h2>
      </div>
      <div className={styles.row__c__right}>
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" />
      </div>
    </div>
  );
};

export default RowC;
