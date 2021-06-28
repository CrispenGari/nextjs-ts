import styles from "./SearchResults.module.css";
import SearchResult from "../SearchResult/SearchResult";
const SearchResults = ({data:{
  items, searchInformation
}}) => {
  return (
    <div className={styles.search__results}>
      <p>
        About {searchInformation?.formattedTotalResults} results (
        {searchInformation?.formattedSearchTime} seconds)
      </p>
      {items?.map((result, index) => (
        <SearchResult key={index} result={result} />
      ))}
    </div>
  );
};

export default SearchResults;
