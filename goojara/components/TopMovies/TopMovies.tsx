import React from "react";
import TopMovie from "../TopMovie/TopMovie";
import styles from "./TopMovies.module.css";

const TopMovies = (props: any) => {
  return (
    <div className={styles.top__movies}>
      {props.topMovies
        ?.filter((movieFilter) => movieFilter.poster_path)
        ?.map((movieMap) => ({
          id: movieMap?.id,
          original_title: movieMap?.original_title,
          title: movieMap?.title,
          poster_path: `https://image.tmdb.org/t/p/original${movieMap?.poster_path}`,
        }))
        .sort((_) => Math.random() - 0.5)
        .slice(0, 6)
        .map((movie) => (
          <TopMovie movie={movie} key={movie.id} withHeader={false} />
        ))}
    </div>
  );
};

export default TopMovies;
