import styles from "./HeaderItem.module.css";

const HeaderItem = ({ Icon, title }) => {
  return (
    <div className={styles.headerItem}>
      <Icon className={styles.headerItem__icon} />
      <p>{title}</p>
    </div>
  );
};

export default HeaderItem;
