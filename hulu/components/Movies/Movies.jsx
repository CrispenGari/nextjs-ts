import style from "./Movies.module.css";

import Movie from "../Movie/Movie";
const Movies = ({ movies }) => {
  return (
    <div className={style.movies}>
      {movies?.map((movie, index) => (
        <Movie movie={movie} key={index} />
      ))}
    </div>
  );
};

export default Movies;
