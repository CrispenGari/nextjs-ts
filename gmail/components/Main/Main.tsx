import styles from "./Main.module.css";

import MainHeader from "../MainHeader/MainHeader";
const Main = () => {
  return (
    <div className={styles.main}>
      <MainHeader />
    </div>
  );
};

export default Main;
