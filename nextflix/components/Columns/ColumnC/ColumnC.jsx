import styles from "./ColumnC.module.css";

const ColumnC = () => {
  return (
    <div className={styles.column__c}>
      <div className={styles.column__c__left}>
        <h1> Watch everywhere.</h1>
        <h2>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV without paying more.
        </h2>
      </div>
      <div className={styles.column__c__right}>
        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" />
      </div>
    </div>
  );
};

export default ColumnC;
