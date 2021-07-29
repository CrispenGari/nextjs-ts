import Header from "../components/Header/Header";
import Message from "../components/Message/Message";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.home__main}>
        <h1>No history</h1>
      </div>
    </div>
  );
};
export default Home;
