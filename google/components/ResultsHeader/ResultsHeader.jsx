import Search from "../Search/Search";
import styles from "./ResultsHeader.module.css";

const ResultsHeader = () => {
  return (
    <div className={styles.results__header}>
      <Search searchResults />
    </div>
  );
};
export default ResultsHeader;
