import React from "react";
import styles from "./Input.module.css";
interface Props {
  label: string;
  placeholder: string;
}

const Input: React.FC<Props | any> = ({
  placeholder,
  value,
  setValue,
  label,
}) => {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default Input;
