import styles from "./Search.module.css";
import { IoMdMic } from "react-icons/io";
import { Search as S } from "@material-ui/icons";
const Search = ({ searchResults }) => {
  const search = (e) => {
    e.preventDefault();
  };
  if (searchResults) {
    return (
      <div className={styles.search__results}>
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          alt="logo"
        />

        <form onSubmit={search} className={styles.search__results__bar}>
          <S onClick={search} className={styles.search__results__bar__icon} />
          <input type="text" placeholder="Search Google or type a URL" />
          <IoMdMic className={styles.search__results__bar__icon} />
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
        <input type="text" placeholder="Search Google or type a URL" />
        <IoMdMic className={styles.search__bar__icon} />
      </form>
    </div>
  );
};

export default Search;
