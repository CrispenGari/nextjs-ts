import React from "react";

import styles from "./HistoryCard.module.css";
const HistoryCard: React.FC<any> = ({ history }) => {
  return (
    <div className={styles.history__card}>
      <div className={styles.history__card__top}>
        <p>
          <span>QUESTION 1</span>
          <span>{history?.question1}</span>
        </p>
        <p>
          <span>QUESTION 2</span>
          <span>{history?.question2}</span>
        </p>
      </div>
      <h1>
        <span>{Number(history?.probability * 100).toFixed(2)}</span>
        <span>{history?.classLabel}</span>
      </h1>
      <p>{history?.date}</p>
    </div>
  );
};

export default HistoryCard;
