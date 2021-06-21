import styles from "../styles/Home.module.css";

import HomeHeader from "../components/HomeHeader/HomeHeader";
import HomeFooter from "../components/HomeFooter/HomeFooter";
import HomeBarner from "../components/HomeBarner/HomeBarner";
import HomeRows from "../components/HomeRows/HomeRows";
const Home = () => (
  <div className={styles.home}>
    <HomeHeader />
    <HomeBarner />
    <HomeRows />
    <HomeFooter />
  </div>
);

export default Home;
