import React from "react";
import styles from "./TopMovie.module.css";
const TopMovie: React.FC = () => {
  return (
    <div className={styles.top__movie}>
      <h2>The Hitman's Wife's</h2>
      <img src="https://www.levidia.to/mg/mb/227/227012.jpg" alt="" />
    </div>
  );
};

export default TopMovie;
