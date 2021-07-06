import styles from "./SideBarItem.module.css";

const SideBarItem = ({ badgeContent, title, Icon, active }) => {
  return (
    <div
      className={!active ? styles.sidebar__item : styles.sidebar__item__active}
      title={title}
    >
      <div>
        <Icon className={styles.sidebar__item__icon} />
        <h1 className={badgeContent ? styles.sidebar__item__h1 : ""}>
          {title}
        </h1>
      </div>
      <small>{badgeContent}</small>
    </div>
  );
};

export default SideBarItem;
