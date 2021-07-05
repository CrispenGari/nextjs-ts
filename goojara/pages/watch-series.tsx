import React from "react";
import styles from "../styles/Watch.module.css";
import Header from "../components/Header/Header";
import TopMovies from "../components/TopMovies/TopMovies";
import Nav from "../components/Nav/Nav";
import Movie from "../components/TopMovie/TopMovie";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import endpoints from "../endpoints";
const Watch: React.FC = (props: any) => {
  return (
    <div className={styles.watch}>
      <Header />
      <Nav />
      <TopMovies topMovies={props?.topMovies.results} />
      <div className={styles.watch__nav}>
        <h1>Recent</h1>
        <h1>Popular</h1>
        <h1>Genre</h1>
        <h1>Year</h1>
        <h1>A-Z</h1>
        <h1>Language</h1>
      </div>
      <div className={styles.watch__container}>
        {props?.movies_list
          ?.filter((movie) => movie?.poster_path)
          ?.map((movie) => ({
            original_title: movie?.original_title,
            release_date: movie?.release_date,
            title: movie.title,
            media_type: movie?.media_type,
            id: movie?.id,
            poster_path: `https://image.tmdb.org/t/p/original${movie?.poster_path}`,
          }))
          .map((movie, index) => (
            <Movie withHeader={true} key={index} movie={movie} />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Watch;

export async function getServerSideProps(context) {
  const base_url = "https://api.themoviedb.org/3";
  const { data: topMovies } = await axios.get(
    `${base_url}${endpoints.discover.url}`
  );
  const { data: horror } = await axios.get(
    `${base_url}${endpoints.horror_movies.url}`
  );
  const { data: actions } = await axios.get(
    `${base_url}${endpoints.action_movies.url}`
  );
  const { data: documentaries } = await axios.get(
    `${base_url}${endpoints.documentaries.url}`
  );
  const { data: trending } = await axios.get(
    `${base_url}${endpoints.trending.url}`
  );
  const { data: romance } = await axios.get(
    `${base_url}${endpoints.romance_movies.url}`
  );
  const { data: top_rated } = await axios.get(
    `${base_url}${endpoints.top_rated.url}`
  );
  const { data: recommended } = await axios.get(
    `${base_url}${endpoints.recommended.url}`
  );
  const { data: now_playing } = await axios.get(
    `${base_url}${endpoints.now_playing.url}`
  );
  const { data: netflix_original } = await axios.get(
    `${base_url}${endpoints.netflix_original.url}`
  );
  const { data: popular } = await axios.get(
    `${base_url}${endpoints.popular.url}`
  );

  const movies_list = [
    ...topMovies.results,
    ...horror.results,
    ...actions.results,
    ...trending.results,
    ...documentaries.results,
    ...romance.results,
    ...top_rated.results,
    ...now_playing.results,
    ...recommended.results,
    ...netflix_original.results,
    ...popular.results,
  ].sort((_) => Math.random() - 0.5);

  return {
    props: {
      topMovies,
      movies_list,
    },
  };
}
