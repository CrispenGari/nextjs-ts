import React from "react";
import styles from "./ActivityIndicator.module.css";

class Props {
  constructor(props) {}
  public size?: number;
  public content?: string;
}

const ActivityIndicator: React.FC<Props> = ({ content, size }) => {
  return (
    <div
      className={styles.activity__indicator}
      style={
        size
          ? {
              width: size,
              height: size,
            }
          : {}
      }
    >
      <p>{content}</p>
    </div>
  );
};

export default ActivityIndicator;
