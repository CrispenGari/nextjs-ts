import Header from "../components/Header/Header";
import React from "react";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav/Nav";
import TopMovies from "../components/TopMovies/TopMovies";
import Footer from "../components/Footer/Footer";

import Unknown from "../components/Unknown/Unknown";
import HomeLists from "../components/HomeLists/HomeLists";
const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Nav />
      <TopMovies />

      <div className={styles.home__main}>
        <HomeLists />
        <Unknown />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
