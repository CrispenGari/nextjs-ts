import React from "react";
import styles from "./TopMovie.module.css";

const TopMovie = ({ withHeader }) => {
  return (
    <div className={styles.top__movie}>
      {withHeader ? (
        <div className={styles.top__movie__top}>
          <p>HDR</p>
          <p>2021</p>
        </div>
      ) : null}
      <h2>The Hitman's Wife's</h2>
      <img src="https://www.levidia.to/mg/mb/227/227012.jpg" alt="" />
    </div>
  );
};

export default TopMovie;
