import styles from "./Search.module.css";
import { IoMdMic, IoMdClose } from "react-icons/io";
import { Search as S } from "@material-ui/icons";
import router from "next/router";
import { useState, useEffect } from "react";
const Search = ({ searchResults }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (router?.query?.q) {
      setQuery(router?.query?.q.replace("+", " "));
    }
  }, [router]);

  useEffect(() => {
    if (router?.pathname.startsWith("/search")) {
      router.push(
        `/search?q=${String(query).toLowerCase().replace(/\s/gim, "+")}`
      );
    }
  }, [query]);
  const search = (e) => {
    e.preventDefault();
    if (query) {
      router.push(
        `/search?q=${String(query).toLowerCase().replace(/\s/gim, "+")}`
      );
    }
  };
  if (searchResults) {
    return (
      <div className={styles.search__results}>
        <img
          onClick={() => router.push("/")}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          alt="logo"
        />

        <form onSubmit={search} className={styles.search__results__bar}>
          <S onClick={search} className={styles.search__results__bar__icon} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Google or type a URL"
          />
          <div className={styles.search__results__bar__right}>
            {query && (
              <>
                <IoMdClose
                  onClick={() => setQuery("")}
                  className={styles.search__results__bar__icon}
                />
                <div></div>
              </>
            )}
            <IoMdMic className={styles.search__results__bar__icon__blue} />
            <S onClick={search} className={styles.search__results__bar__icon} />
          </div>
        </form>
      </div>
    );
  }
  return (
    <div className={styles.search}>
      <img
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
        alt="logo"
      />

      <form onSubmit={search} className={styles.search__bar}>
        <S onClick={search} className={styles.search__bar__icon} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search Google or type a URL"
        />
        <IoMdMic className={styles.search__bar__icon} />
      </form>
    </div>
  );
};

export default Search;
