import styles from "./Main.module.css";

import MainHeader from "../MainHeader/MainHeader";
import MainNav from "../MainNav/MainNav";
const Main = () => {
  return (
    <div className={styles.main}>
      <MainHeader />
      <MainNav />
    </div>
  );
};

export default Main;
