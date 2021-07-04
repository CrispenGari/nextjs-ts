import React from "react";
import styles from "./Footer.module.css";
const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <small>Goojara</small>
      <h2>
        9678 <span>ONLINE</span>
      </h2>
    </div>
  );
};
export default Footer;
