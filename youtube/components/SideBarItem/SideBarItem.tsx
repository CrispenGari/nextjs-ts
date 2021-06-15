import styles from "./SideBarItem.module.css";
const SideBarItem = ({ Icon, title, active, setActive }) => {
  return (
    <div
      onClick={() => setActive(title)}
      className={
        active === title ? styles.sidebar__item__active : styles.sidebar__item
      }
    >
      <Icon className={styles.sidebar__icon} />
      <p>{title}</p>
    </div>
  );
};

export default SideBarItem;
