import styles from "../../styles/Search.module.css";
import SideBar from "../../components/SideBar/Sidebar";
import Results from "../../components/Results/Results";
const Search = () => {
  return (
    <div className={styles.search}>
      <SideBar />
      <Results />
    </div>
  );
};

export default Search;
