import React from "react";

import styles from "./Predictions.module.css";

interface Prediction {
  classLabel: number;
  class: string;
  probability: number;
  time;
}
class Props {
  public prediction: Prediction;
}
const Predictions: React.FC<Props> = ({ prediction }) => {
  return (
    <div className={styles.predictions}>
      <h1>{prediction?.class}</h1>
      <h1> {Number(prediction?.probability * 100).toFixed(0)}%</h1>
      <p>{Number.parseFloat(prediction?.time).toFixed(2)}s</p>
    </div>
  );
};

export default Predictions;
