import HeaderTop from "../HeaderTop/HeaderTop";
import styles from "./Main.module.css";
import Search from "../Search/Search";
import { MdCreate } from "react-icons/md";
import Shortcuts from "../Shortcuts/Shortcuts";
const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__top}>
        <HeaderTop />
      </div>
      <div className={styles.main__main}>
        <Search />
        <Shortcuts />
      </div>
      <div className={styles.main__main__customize} title="Customize this page">
        <MdCreate className={styles.main__main__customize__icon} />
        <p>Customize Chrome</p>
      </div>
    </div>
  );
};

export default Main;

// http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png
