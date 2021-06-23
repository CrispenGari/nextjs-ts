import styles from "./BrowseRow.module.css";
import { IoAddCircle } from "react-icons/io5";
import BrowseProfile from "../BrowseProfile/BrowseProfile";

const BrowseRow = ({ setCreateProfile, profiles }) => {
  return (
    <div className={styles.browse__row}>
      <div
        className={styles.browse__row__profiles}
        style={
          profiles?.length == 0
            ? {
                display: "grid",
                placeItems: "center",
              }
            : {
                display: "flex",
              }
        }
      >
        {profiles?.length > 0 ? (
          profiles?.map((profile, index) => (
            <BrowseProfile profile={profile} key={index} />
          ))
        ) : (
          <h1>No profiles for this account click Add To Create one.</h1>
        )}
      </div>
      <div
        className={styles.browse__row___add__profile__container}
        onClick={() => setCreateProfile(true)}
      >
        <div className={styles.browse__row___add__profile}>
          <IoAddCircle className={styles.browse__row___add__profile__icon} />
        </div>
        <p>Add Profile</p>
      </div>
    </div>
  );
};

export default BrowseRow;
