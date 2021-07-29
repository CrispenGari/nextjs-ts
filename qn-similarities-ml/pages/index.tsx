import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import Message from "../components/Message/Message";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.home__main}>
        <Message />
        <Form />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
