import React from "react";
import styles from "./Unknown.module.css";
const Unknown: React.FC = () => {
  return (
    <div className={styles.unknown}>
      Have a movie or TV show you'd like to see on Goojara? Tell us about it at{" "}
      <a href="https://supernova.to/sn/requests">
        https://supernova.to/sn/requests
      </a>
    </div>
  );
};

export default Unknown;
