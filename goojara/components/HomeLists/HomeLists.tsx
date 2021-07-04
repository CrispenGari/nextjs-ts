import React from "react";
import styles from "./HomeLists.module.css";
const HomeLists: React.FC = () => {
  return (
    <div className={styles.home__lists}>
      <div className={styles.home__lists__nav}>
        <h1>Recent</h1>
        <h1>Popular</h1>
        <h1>Genre</h1>
        <h1>Year</h1>
        <h1>A-Z</h1>
        <h1>Language</h1>
      </div>
      <div className={styles.home__lists__movies}></div>
    </div>
  );
};

export default HomeLists;
