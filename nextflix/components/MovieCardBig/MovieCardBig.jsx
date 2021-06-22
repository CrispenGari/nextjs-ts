import styles from "./MovieCardBig.module.css";
import { GoPlay } from "react-icons/go";
import { FaChevronCircleDown } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
const MovieCardBig = ({ movie }) => {
  const image_base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div className={styles.movie__card__big}>
      <div className={styles.movie__card__big__image__cover}>
        <img
          src={`${image_base_url}${movie?.poster_path}`}
          loading="lazy"
          alt="movie"
        />
      </div>
      <div className={styles.movie__card__big__bottom}>
        <div className={styles.movie__card__big__bottom__top}>
          <div>
            <GoPlay className={styles.movie__card__big__bottom__icon} />
            <MdAddCircleOutline
              className={styles.movie__card__big__bottom__icon}
            />
          </div>
          <FaChevronCircleDown
            className={styles.movie__card__big__bottom__icon}
          />
        </div>
        <h1>{movie?.original_title || movie?.title}</h1>
        <h2>{movie?.release_date}</h2>
        <div className={styles.movie__card__big__bottom__bottom}></div>
      </div>
    </div>
  );
};

export default MovieCardBig;
