import MainHeader from "../MainHeader/MainHeader";
import styles from "./Main.module.css";
import Videos from "../Videos/Videos";
const Main = () => {
  return (
    <div className={styles.main}>
      <MainHeader />
      <Videos />
    </div>
  );
};

export default Main;
