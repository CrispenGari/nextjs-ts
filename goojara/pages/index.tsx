import Header from "../components/Header/Header";
import React from "react";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav/Nav";

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Nav />
    </div>
  );
};

export default Home;
