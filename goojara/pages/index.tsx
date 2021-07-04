import Header from "../components/Header/Header";
import React from "react";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Header />
    </div>
  );
};

export default Home;
