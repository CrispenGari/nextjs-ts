import ResultsHeader from "../components/ResultsHeader/ResultsHeader";
import ResultsNav from "../components/ResultsNav/ResultsNav";
import SearchResults from "../components/SearchResults/SearchResults";
import styles from "../styles/Search.module.css";
import router from "next/router";
import Axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSession } from "next-auth/client";
const Search = ({ data, pathName }) => {
  const [query, setQuery] = useState({});
  const [session, loading] = useSession();
  useLayoutEffect(() => {
    document.title = router?.query?.q.replace(/\+/gim, " ") ?? "Google";
  }, [router]);

  useEffect(() => {
    document.title = router?.query?.q.replace(/\+/gim, " ") ?? "Google";
  }, [router]);
  useEffect(() => {
    if (session?.user) {
      (async () => {
        await Axios({
          method: "POST",
          url: "http://localhost:3000/api/shortcuts/create",
          data: {
            username: session?.user?.name,
            email: session?.user?.email,
            shortcut: data?.items[0]?.title?.split("-")[0],
            shortcutImage: data?.items[0]?.pagemap?.cse_thumbnail[0]?.src,
            userImage: session?.user?.image,
          },
        }).catch((error) => console.log(error));
      })();
    } else {
      (async () => {
        await Axios({
          method: "POST",
          url: "http://localhost:3000/api/shortcuts/create",
          data: {
            username: "unknown",
            email: "unknown@gmail.com",
            shortcut: data?.items[0]?.title?.split("-")[0],
            shortcutImage: data?.items[0]?.pagemap?.cse_thumbnail[0]?.src,
            userImage: null,
          },
        }).catch((error) => console.log(error));
      })();
    }
  }, [data, session]);
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
    const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_CUSTOM_SEARCH_API}&cx=${process.env.PROGRAMABLE_SEARCH_ENGINE_ID}&q=${q}`;
    const data = await fetch(url)
      .then((res) => res.json())
      .catch((error) => {
        console.error("Server side error...");
        return {
          props: {},
        };
      });
    return {
      props: {
        data,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
