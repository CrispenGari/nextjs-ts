import styles from "./ResultNavItem.module.css";
const ResultNavItem = ({ Icon, text, active }) => {
  return (
    <div
      className={
        active ? styles.result__nav__item__active : styles.result__nav__item
      }
    >
      {Icon && <Icon className={styles.result__nav__item__icon} />}

      <p>{text}</p>
    </div>
  );
};

export default ResultNavItem;
