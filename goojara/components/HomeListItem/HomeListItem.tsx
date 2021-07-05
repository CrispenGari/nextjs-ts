import React from "react";
import styles from "./HomeListItem.module.css";
import { MdLocalMovies } from "react-icons/md";
import { GoDeviceDesktop } from "react-icons/go";

const HomeListItem = (props: any) => {
  const randomIcon: boolean = props?.movie.media_type === "movie";
  const movieTitle = props?.movie?.original_title || props?.movie?.title;
  if (!movieTitle) {
    return <></>;
  }
  return (
    <div className={styles.home__list__item}>
      <div className={styles.home__list__item__left}>
        {randomIcon ? (
          <MdLocalMovies className={styles.home__list__item__left__icon1} />
        ) : (
          <GoDeviceDesktop className={styles.home__list__item__left__icon2} />
        )}
        <h1>
          {movieTitle}
          {props?.movie?.release_date ? (
            <span>({props?.movie?.release_date?.split("-")[0]})</span>
          ) : null}
        </h1>
      </div>
      <div className={styles.home__list__item__right}>
        {!randomIcon ? "HDTV" : "HDR"}
      </div>
    </div>
  );
};

export default HomeListItem;
