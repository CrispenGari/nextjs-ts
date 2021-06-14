import style from "./Movies.module.css";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import Movie from "../Movie/Movie";
import YouTube from "react-youtube";
import { useState } from "react";
import Axios from "axios";
const Movies = ({ movies }) => {
  const [videoId, setVideoId] = useState("");
  const playMovie = (movie) => {
    setVideoId("");
    let movie_name =
      movie?.original_title ||
      movie?.title ||
      movie?.original_name ||
      movie?.name;
    movie_name = movie_name.replace(/\s/gm, "%20").toLowerCase();

    (async () => {
      await Axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${movie_name}&key=${publicRuntimeConfig.YOUTUBE_API_KEY}`
      )
        .then((res) => {
          setVideoId(res.data?.items[0]?.id?.videoId);
        })
        .catch((error) => console.log(error));
    })();
  };
  const options = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      {videoId && (
        <YouTube
          videoId={videoId}
          opts={options}
          className={style.movie__player}
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
