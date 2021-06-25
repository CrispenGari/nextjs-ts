import styles from "./HomeBarner.module.css";
import { ImPlay3 } from "react-icons/im";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

const HomeBarner = ({ movies }) => {
  const [movieIndex, setMovieIndex] = useState(0);
  const image_base_url = "https://image.tmdb.org/t/p/original/";
  let index = 0;
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index === movies.length) {
        setMovieIndex(0);
      } else {
        setMovieIndex(index);
      }
      index += 1;
    }, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, [index]);
  return (
    <div
      className={styles.home__barner}
      style={{
        backgroundImage: `url("${image_base_url}${movies[movieIndex]?.backdrop_path}")`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.home__barner__movie}>
        <h4>
          {movies[movieIndex]?.title || movies[movieIndex]?.original_title}
        </h4>
        <p>{movies[movieIndex]?.overview}</p>
        <div className={styles.home__barner__buttons}>
          <button>
            <ImPlay3 className={styles.home__button__icon} />
            Play
          </button>
          <button>
            <AiOutlineInfoCircle className={styles.home__button__icon} />
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBarner;
