import Header from "../components/Header/Header";
import React from "react";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav/Nav";
import TopMovies from "../components/TopMovies/TopMovies";
import Footer from "../components/Footer/Footer";
import Unknown from "../components/Unknown/Unknown";
import HomeLists from "../components/HomeLists/HomeLists";
import endpoints from "../endpoints";
import axios from "axios";
const Home: React.FC = (props: any) => {
  return (
    <div className={styles.home}>
      <Header />
      <Nav />
      <TopMovies topMovies={props?.topMovies.results} />
      <div className={styles.home__main}>
        <HomeLists
          movies={props?.movies_list?.map((movie) => ({
            original_title: movie?.original_title,
            release_date: movie?.release_date,
            title: movie.title,
            media_type: movie?.media_type,
          }))}
        />
        <Unknown />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

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

  const movies_list = [
    ...topMovies.results,
    ...horror.results,
    ...actions.results,
    ...trending.results,
    ...documentaries.results,
  ].sort((_) => Math.random() - 0.5);

  return {
    props: {
      topMovies,
      movies_list,
    },
  };
}
