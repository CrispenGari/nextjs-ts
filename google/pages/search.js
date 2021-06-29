import ResultsHeader from "../components/ResultsHeader/ResultsHeader";
import ResultsNav from "../components/ResultsNav/ResultsNav";
import SearchResults from "../components/SearchResults/SearchResults";
import styles from "../styles/Search.module.css";
import router from "next/router";
import Axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
const Search = ({ data }) => {
  console.log(data);
  const [query, setQuery] = useState({});
  return (
    <div className={styles.search}>
      <ResultsHeader />
      <SearchResults data={data} />
    </div>
  );
};
export default Search;

export async function getServerSideProps(context) {
  const { q } = await context?.query;
  if (q) {
    // const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_CUSTOM_SEARCH_API}&cx=${process.env.PROGRAMABLE_SEARCH_ENGINE_ID}&q=${q}`;
    // const data = await fetch(url).then((res) => res.json());

    return {
      props: {
        data: {
          message: null,
        },
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
