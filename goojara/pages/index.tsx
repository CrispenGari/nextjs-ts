import Header from "../components/Header/Header";
import React from "react";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav/Nav";
import TopMovies from "../components/TopMovies/TopMovies";
import Footer from "../components/Footer/Footer";
const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Nav />
      <TopMovies />

      <Footer />
    </div>
  );
};

export default Home;
