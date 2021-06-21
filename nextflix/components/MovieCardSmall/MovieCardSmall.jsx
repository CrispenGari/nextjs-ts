import styles from "./MovieCardSmall.module.css";
import { GoPlay } from "react-icons/go";
import { FaChevronCircleDown } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
const MovieCardSmall = () => {
  return (
    <div className={styles.movie__card__small}>
      <div className={styles.movie__card__small__image__wrapper}>
        <img
          src="https://www.comingsoon.net/assets/uploads/2020/11/prison-break-premiere-pic-1280x720.jpg"
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
          />
        </div>
        <div className={styles.movie__card__small__info__center}>98% match</div>
        <div className={styles.movie__card__small__info__bottom}>
          <span>Dark</span>•<span>Suspenseful</span>•<span>Action</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCardSmall;
