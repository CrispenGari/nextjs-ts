import styles from "../styles/Browse.module.css";

import BrowseHeader from "../components/BrowseHeader/BrowseHeader";
import BrowseRow from "../components/BrowseRow/BrowseRow";
import BrowseAddProfile from "../components/BrowseAddProfile/BrowseAddProfile";
import { useEffect, useState } from "react";
import Axios from "axios";
import BrowseManageAccounts from "../components/BrowseManageAccounts/BrowseManageAccounts";
import router from "next/router";
const Browse = ({ profiles, message }) => {
  const [createProfile, setCreateProfile] = useState(false);
  const [manageAccounts, setManageAccounts] = useState(false);
  useEffect(() => {
    if (message?.status === 404) {
      router.replace("/login");
    }
  }, [message]);
  useEffect(() => {
    setCreateProfile(false);
  }, []);
  return (
    <div className={styles.browse}>
      <BrowseHeader />
      {!manageAccounts ? (
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
              <button onClick={() => setManageAccounts(true)}>
                Manage Profiles
              </button>
            </>
          )}
        </div>
      ) : (
        <div className={styles.browse__main}>
          <BrowseManageAccounts
            profiles={profiles}
            setCreateProfile={setCreateProfile}
            setManageAccounts={setManageAccounts}
          />
        </div>
      )}
    </div>
  );
};

export default Browse;

export async function getServerSideProps(context) {
  const userEmail = await context?.query?.email;
  let data = null;
  if (userEmail) {
    data = await Axios({
      url: `http://localhost:3001/profiles/${userEmail}`,
      method: "GET",
    });
  }
  console.log(data);
  if (!data) {
    return {
      props: {
        message: {
          errorMessage: "Not found",
          status: 404,
        },
      },
    };
  }
  return {
    props: {
      profiles: data?.data?.profiles,
      message: {
        errorMessage: "ok",
        status: 200,
      },
    },
  };
}
