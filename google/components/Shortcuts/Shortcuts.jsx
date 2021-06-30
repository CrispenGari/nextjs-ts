import styles from "./Shortcuts.module.css";
import Shortcut from "../Shortcut/Shortcut";
const Shortcuts = ({ shortcuts }) => {
  return (
    <div className={styles.shortcuts}>
      {shortcuts?.map((shortcut, index) => (
        <Shortcut key={index} shortcut={shortcut} />
      ))}
    </div>
  );
};

export default Shortcuts;
