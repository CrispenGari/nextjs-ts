import styles from "./Shortcut.module.css";
import { Avatar, IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import router from "next/router";
const Shortcut = ({ shortcut }) => {
  return (
    <div
      className={styles.shortcut}
      onClick={() => {
        router.push(`/search?q=${shortcut?.shortcut?.toLowerCase()}`);
      }}
    >
      <IconButton className={styles.shortcut__icon__btn} title="More actions">
        <MoreVert className={styles.shortcut__icon} />
      </IconButton>
      <Avatar
        className={styles.shortcut__avatar}
        alt={shortcut?.shortcut}
        src={shortcut?.shortcutImage ?? "https://assets.stickpng.com/img.png"}
      />
      <p>{shortcut?.shortcut}</p>
    </div>
  );
};

export default Shortcut;
