import React from "react";

import styles from "./Footer.module.css";
const Footer: React.FC<any> = () => {
  return (
    <div className={styles.footer}>
      <p>
        Created using Artificial Intelligence by <span>Crispen Gari</span>.
        Built using JavaScript, Python, Jupyter Notebook, TypeScript. Also have
        a Node backend for history tracking and Python Flask Machine Leaning
        backend.
      </p>
    </div>
  );
};

export default Footer;
