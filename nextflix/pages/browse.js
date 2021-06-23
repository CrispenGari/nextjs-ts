import styles from "../styles/Browse.module.css";

import BrowseHeader from "../components/BrowseHeader/BrowseHeader";
import BrowseRow from "../components/BrowseRow/BrowseRow";
import BrowseAddProfile from "../components/BrowseAddProfile/BrowseAddProfile";
import { useEffect, useState } from "react";
import Axios from "axios";
const Browse = ({ profiles }) => {
  const [createProfile, setCreateProfile] = useState(false);

  useEffect(() => {
    setCreateProfile(false);
  }, []);
  return (
    <div className={styles.browse}>
      <BrowseHeader />
      <div className={styles.browse__main}>
        {createProfile ? (
          <BrowseAddProfile setCreateProfile={setCreateProfile} />
        ) : (
          <>
            <h1>Who's watching?</h1>
            <BrowseRow
              profiles={profiles}
              setCreateProfile={setCreateProfile}
            />
            <button>Manage Profiles</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;

export async function getServerSideProps(context) {
  const userEmail = await context?.query?.email;
  const { data } = await Axios({
    url: `http://localhost:3001/profiles/${userEmail}`,
    method: "GET",
  });

  return {
    props: {
      profiles: data?.profiles,
    },
  };
}
