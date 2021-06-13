import style from "./Movies.module.css";

import Movie from "../Movie/Movie";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useState } from "react";
const Movies = ({ movies }) => {
  const [trailerURL, setTrailer] = useState("");

  const options = {
    height: "460",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const playMovie = (movie) => {
    console.log(movie);
    if (trailerURL) {
      setTrailer("");
    } else {
      try {
        movieTrailer(
          movie?.original_title ||
            movie?.title ||
            movie?.original_name ||
            movie?.name
        )
          ?.then((url) => {
            console.log(url);
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailer(urlParams.get("v"));
          })
          .catch((e) => {
            console.log(e);
          });
      } catch (err) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {trailerURL && (
        <YouTube
          videoId={trailerURL}
          opts={options}
          className="container_vedio"
        />
      )}
      <div className={style.movies}>
        {movies?.map((movie, index) => (
          <Movie movie={movie} key={index} playMovie={playMovie} />
        ))}
      </div>
    </>
  );
};

export default Movies;
