import React from "react";
import styles from "./Button.module.css";
const Button: React.FC<any> = ({ type, onClick, title, disabled }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={styles.button}
  >
    {title}
  </button>
);

export default Button;
