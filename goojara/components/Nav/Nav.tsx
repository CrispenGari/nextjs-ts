import React from "react";
import styles from "./Nav.module.css";
const Nav: React.FC = () => {
  return (
    <div className={styles.nav}>
      <h1>Browse</h1>
      <h1>Movies</h1>
      <h1>Series</h1>
    </div>
  );
};

export default Nav;
