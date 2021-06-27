import styles from "./Shortcuts.module.css";
import Shortcut from "../Shortcut/Shortcut";
const Shortcuts = () => {
  return (
    <div className={styles.shortcuts}>
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <Shortcut key={index} />
        ))}
    </div>
  );
};

export default Shortcuts;
