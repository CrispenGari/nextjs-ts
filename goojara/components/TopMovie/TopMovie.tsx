import React from "react";
import styles from "./TopMovie.module.css";
const TopMovie = ({ withHeader, movie }) => {
  const randomIcon: boolean = movie?.media_type === "movie";
  return (
    <div
      className={styles.top__movie}
      title={movie.title || movie.original_title}
    >
      {withHeader ? (
        <div className={styles.top__movie__top}>
          <p>{randomIcon ? "HDR" : "HDTV"}</p>
          <p>{movie?.release_date?.split("-")[0] ?? "2020"}</p>
        </div>
      ) : null}
      <h2>{movie.title || movie.original_title}</h2>
      <img loading="lazy" src={movie?.poster_path} alt="movie" />
    </div>
  );
};

export default TopMovie;
