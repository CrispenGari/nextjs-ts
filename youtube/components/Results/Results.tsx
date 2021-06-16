import SearchHeader from "../SearchHeader/SearchHeader";
import styles from "./Results.module.css";
import { VscSettings } from "react-icons/vsc";
import SearchResult from "../SearchResult/SearchResult";
import data from "../../videos.json";
const Results = () => {
  return (
    <div className={styles.results}>
      <SearchHeader />
      <div className={styles.results__main}>
        <h1>
          <VscSettings className={styles.results__icon} /> FILTERS
        </h1>
        <SearchResult video={data?.items[0]} />
        <SearchResult video={data?.items[0]} />
        <SearchResult video={data?.items[0]} />
        <SearchResult video={data?.items[0]} />
        <SearchResult video={data?.items[0]} />
        <SearchResult video={data?.items[0]} />
        <SearchResult video={data?.items[0]} />
        <SearchResult video={data?.items[0]} />
        <SearchResult video={data?.items[0]} />
        <SearchResult video={data?.items[0]} />
        <SearchResult video={data?.items[0]} />
        <SearchResult video={data?.items[0]} />
        <SearchResult video={data?.items[0]} />
        <SearchResult video={data?.items[0]} />
      </div>
    </div>
  );
};

export default Results;
