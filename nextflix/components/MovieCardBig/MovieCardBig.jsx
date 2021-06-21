import styles from "./MovieCardBig.module.css";
import { GoPlay } from "react-icons/go";
import { FaChevronCircleDown } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
const MovieCardBig = () => {
  return (
    <div className={styles.movie__card__big}>
      <div className={styles.movie__card__big__image__cover}>
        <img
          src="https://phantom-marca.unidadeditorial.es/befa972b82331a2578b529ac9b5afc99/resize/1320/f/jpg/assets/multimedia/imagenes/2021/05/14/16210291347884.jpg"
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
        <h1>Movie name</h1>
        <h2>Season</h2>
        <div className={styles.movie__card__big__bottom__bottom}></div>
      </div>
    </div>
  );
};

export default MovieCardBig;
