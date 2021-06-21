import styles from "../styles/Browse.module.css";

import BrowseHeader from "../components/BrowseHeader/BrowseHeader";
import BrowseRow from "../components/BrowseRow/BrowseRow";
import BrowseAddProfile from "../components/BrowseAddProfile/BrowseAddProfile";
import { useState } from "react";

const Browse = () => {
  const [createProfile, setCreateProfile] = useState(false);
  return (
    <div className={styles.browse}>
      <BrowseHeader />
      <div className={styles.browse__main}>
        {createProfile ? (
          <BrowseAddProfile setCreateProfile={setCreateProfile} />
        ) : (
          <>
            <h1>Who's watching?</h1>
            <BrowseRow setCreateProfile={setCreateProfile} />
            <button>Manage Profiles</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
