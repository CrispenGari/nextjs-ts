import styles from "./SearchResults.module.css";
import SearchResult from "../SearchResult/SearchResult";
// import data from "../../data.json";
const SearchResults = ({ data }) => {
  return (
    <div className={styles.search__results}>
      <p>
        About {data?.searchInformation?.formattedTotalResults} results (
        {data?.searchInformation?.formattedSearchTime} seconds)
      </p>
      {data?.items?.map((result, index) => (
        <SearchResult key={index} result={result} />
      ))}
    </div>
  );
};
export default SearchResults;
