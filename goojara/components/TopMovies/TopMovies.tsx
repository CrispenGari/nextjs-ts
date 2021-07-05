import React from "react";
import TopMovie from "../TopMovie/TopMovie";
import styles from "./TopMovies.module.css";

const TopMovies: React.FC = () => {
  return (
    <div className={styles.top__movies}>
      {Array(6)
        .fill(null)
        .map((_, key) => (
          <TopMovie key={key} withHeader={false} />
        ))}
    </div>
  );
};

export default TopMovies;
