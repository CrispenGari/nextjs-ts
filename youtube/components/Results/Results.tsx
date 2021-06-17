import SearchHeader from "../SearchHeader/SearchHeader";
import styles from "./Results.module.css";
import { VscSettings } from "react-icons/vsc";
import SearchResult from "../SearchResult/SearchResult";
import data from "../../videos.json";
import axios from "axios";
const Results = ({ data }) => {
  //console.log(data);
  return (
    <div className={styles.results}>
      <SearchHeader />
      <div className={styles.results__main}>
        <h1>
          <VscSettings className={styles.results__icon} /> FILTERS
        </h1>
        {data?.map((video, index) => (
          <SearchResult video={video} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Results;
