import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import HistoryCard from "../components/HistoryCard/HistoryCard";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [histories, setHistories] = useState<any>();

  useEffect(() => {
    axios
      .get("http://localhost:3001/histories")
      .then(({ data }) => setHistories(data));
  }, []);
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.home__main}>
        {histories?.map((history: any) => (
          <HistoryCard history={history} key={history?._id} />
        ))}
      </div>
    </div>
  );
};
export default Home;
