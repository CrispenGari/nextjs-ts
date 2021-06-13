import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
export default () => (
  <div className={styles.app}>
    <Header />
    <Nav />
  </div>
);
