import Search from "../Search/Search";
import styles from "./ResultsHeader.module.css";
import HeaderTop from "../HeaderTop/HeaderTop";
import ResultsNav from "../ResultsNav/ResultsNav";
const ResultsHeader = () => {
  return (
    <div className={styles.results__header}>
      <div className={styles.results__header__top}>
        <Search searchResults />
        <HeaderTop searchResults />
      </div>
      <div className={styles.results__header__bottom}>
        <ResultsNav />
      </div>
    </div>
  );
};
export default ResultsHeader;
