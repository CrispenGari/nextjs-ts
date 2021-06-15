import Link from "next/link";
import styles from "../styles/Home.module.css";
import Main from "../components/Main/Main";
import SideBar from "../components/SideBar/Sidebar";
const Home = () => (
  <div className={styles.app}>
    <SideBar />
    <Main />
  </div>
);
export default Home;
