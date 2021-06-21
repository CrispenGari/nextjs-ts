import styles from "../styles/Home.module.css";

import HomeHeader from "../components/HomeHeader/HomeHeader";
import HomeFooter from "../components/HomeFooter/HomeFooter";
import HomeBarner from "../components/HomeBarner/HomeBarner";
import HomeRows from "../components/HomeRows/HomeRows";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <div className={styles.home__container__header__banner}>
          <HomeHeader />
          <HomeBarner />
        </div>
      </div>
      <HomeRows />
      <HomeFooter />
    </div>
  );
};

export default Home;
