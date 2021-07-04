import React from "react";
import styles from "./Header.module.css";
const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <h1>GOOJARA.to</h1>
      <div className={styles.header__search}>
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default Header;
