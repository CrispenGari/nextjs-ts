import styles from "../styles/Browse.module.css";

import BrowseHeader from "../components/BrowseHeader/BrowseHeader";
import BrowseColumn from "../components/BrowseColumn/BrowseColumn";
import BrowseAddProfile from "../components/BrowseAddProfile/BrowseAddProfile";

const Browse = () => {
  return (
    <div className={styles.browse}>
      <BrowseHeader />

      <div className={styles.browse__main}>
        <BrowseAddProfile />
        {/* <h1>Who's watching?</h1>
        <BrowseColumn />
        <button>Manage Profiles</button> */}
      </div>
    </div>
  );
};

export default Browse;
