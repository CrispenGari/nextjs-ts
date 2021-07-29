import React from "react";

import styles from "./Predictions.module.css";

interface Prediction {
  classLabel: number;
  className: string;
  probability: number;
}
class Props {
  public prediction: Prediction;
}
const Predictions: React.FC<Props> = ({
  prediction: { classLabel, className, probability },
}) => {
  return (
    <div className={styles.predictions}>
      <h1>{className}</h1>
      <h1> {probability}%</h1>
    </div>
  );
};

export default Predictions;
