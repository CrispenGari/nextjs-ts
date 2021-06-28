import styles from "./SearchResult.module.css";

const SearchResult = ({ result }) => {
  return (
    <div className={styles.search__result}>
      <a href={result?.link}>{result?.link}</a>
      <a
        href={result?.link}
        dangerouslySetInnerHTML={{ __html: result?.title }}
      ></a>
      <p>{result?.snippet}</p>
    </div>
  );
};
export default SearchResult;
