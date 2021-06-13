import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Movies from "../components/Movies/Movies";
import endpoints from "../utils/endpoints";
import Axios from "axios";
const Home = ({ data }) => {
  return (
    <div className={styles.app}>
      <Header />
      <Nav />
      <Movies movies={data?.results} />
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const category = Object.keys(context.query)[0];
  const { data } = await Axios({
    method: "GET",
    url: category
      ? `https://api.themoviedb.org/3${endpoints[category]?.url}`
      : `https://api.themoviedb.org/3${endpoints["recommended"]?.url}`,
  });

  return {
    props: {
      data: data,
    },
  };
}
