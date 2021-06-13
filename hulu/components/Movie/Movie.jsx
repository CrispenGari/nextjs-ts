import styles from "./Movie.module.css";
import Image from "next/image";
import { BiLike } from "react-icons/bi";
const Movie = ({ movie }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    movie?.backdrop_path && (
      <div className={styles.movie}>
        <img
          layout="responsive"
          alt="Movie"
          src={`${base_url}${movie?.backdrop_path}`}
          className={styles.movie_image}
          loading="lazy"
        />
        <p>{movie?.overview}</p>
        <h1>
          {movie?.original_title ||
            movie?.title ||
            movie?.original_name ||
            movie?.name}
        </h1>
        <p>
          {movie?.release_date ? movie?.release_date : "No date "} •{" "}
          {movie?.vote_count}
          <BiLike className={styles.movie__like__icon} />
        </p>
      </div>
    )
  );
};

export default Movie;
