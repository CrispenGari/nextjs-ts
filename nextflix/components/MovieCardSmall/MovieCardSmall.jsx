import styles from "./MovieCardSmall.module.css";
import { GoPlay } from "react-icons/go";
import { FaChevronCircleDown } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { useState } from "react";
const MovieCardSmall = ({ movie }) => {
  const image_base_url = "https://image.tmdb.org/t/p/original/";
  const [viewInfo, setViewInfo] = useState(false);
  if (movie?.backdrop_path) {
    return (
      <div className={styles.movie__card__small}>
        <div className={styles.movie__card__small__image__wrapper}>
          <img
            src={`${image_base_url}${movie?.backdrop_path}`}
            alt="movie-card"
            loading="lazy"
          />
        </div>
        <div className={styles.movie__card__small__info}>
          <div className={styles.movie__card__small__info__top}>
            <div>
              <GoPlay className={styles.movie__card__small__info__icon} />
              <MdAddCircleOutline
                className={styles.movie__card__small__info__icon}
              />
              <p>
                <AiOutlineLike
                  className={styles.movie__card__small__info__icon}
                />
              </p>

              <p>
                <AiOutlineDislike
                  className={styles.movie__card__small__info__icon}
                />
              </p>
            </div>
            <FaChevronCircleDown
              className={styles.movie__card__small__info__icon}
              onClick={() => setViewInfo(true)}
            />
          </div>
          <div className={styles.movie__card__small__info__center}>
            {movie?.vote_average * 10}% match
          </div>
          <div className={styles.movie__card__small__info__bottom}>
            <span>{movie?.release_date}</span>•<span>{movie?.popularity}</span>•
            <span>{movie?.original_language}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default MovieCardSmall;
