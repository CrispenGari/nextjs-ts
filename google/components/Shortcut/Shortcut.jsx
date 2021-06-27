import styles from "./Shortcut.module.css";
import { Avatar, IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
const Shortcut = () => {
  return (
    <div className={styles.shortcut}>
      <IconButton className={styles.shortcut__icon__btn} title="More actions">
        <MoreVert className={styles.shortcut__icon} />
      </IconButton>
      <Avatar
        className={styles.shortcut__avatar}
        alt={"G"}
        src="https://assets.stickpng.com/img.png"
      />
      <p>Google</p>
    </div>
  );
};

export default Shortcut;
