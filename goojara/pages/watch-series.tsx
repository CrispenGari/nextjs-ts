import React from "react";
import styles from "../styles/Watch.module.css";
import Header from "../components/Header/Header";
import TopMovies from "../components/TopMovies/TopMovies";
import Nav from "../components/Nav/Nav";
import Movie from "../components/TopMovie/TopMovie";
import Footer from "../components/Footer/Footer";
const Watch: React.FC = () => {
  return (
    <div className={styles.watch}>
      <Header />
      <Nav />
      <TopMovies />
      <div className={styles.watch__nav}>
        <h1>Recent</h1>
        <h1>Popular</h1>
        <h1>Genre</h1>
        <h1>Year</h1>
        <h1>A-Z</h1>
        <h1>Language</h1>
      </div>
      <div className={styles.watch__container}>
        <Movie withHeader={true} />
        <Movie withHeader={true} />
        <Movie withHeader={true} />
        <Movie withHeader={true} />
        <Movie withHeader={true} />
        <Movie withHeader={true} />
        <Movie withHeader={true} />
        <Movie withHeader={true} />
      </div>
      <Footer />
    </div>
  );
};

export default Watch;
