import styles from "../styles/Browse.module.css";

import BrowseHeader from "../components/BrowseHeader/BrowseHeader";
import BrowseColumn from "../components/BrowseColumn/BrowseColumn";

const Browse = () => {
  return (
    <div className={styles.browse}>
      <BrowseHeader />
      <div className={styles.browse__main}>
        <h1>Who's watching?</h1>
        <BrowseColumn />
        <button>Manage Profiles</button>
      </div>
    </div>
  );
};

export default Browse;
