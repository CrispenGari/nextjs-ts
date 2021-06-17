import styles from "./SideBarItem.module.css";
import { Avatar } from "@material-ui/core";
import router from "next/router";
const SideBarItem = ({ Icon, title, active, setActive, isSubscription }) => {
  if (isSubscription) {
    return (
      <div className={styles.sidebar__item__subscription}>
        <Avatar className={styles.sidebar__avatar} alt="subscription" />
        <p>{title}</p>
      </div>
    );
  }
  return (
    <div
      onClick={() => {
        setActive(title);
        if (title.toLowerCase() === "home") {
          router.push("/");
        }
      }}
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
