import styles from "./BrowseRow.module.css";
import { IoAddCircle } from "react-icons/io5";
import BrowseProfile from "../BrowseProfile/BrowseProfile";

const profiles = [
  {
    username: "username1",
    avatar:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",
  },
  {
    username: "username2",
    avatar:
      "https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png",
  },
];
const BrowseRow = ({ setCreateProfile }) => {
  return (
    <div className={styles.browse__row}>
      <div className={styles.browse__row__profiles}>
        {profiles?.map((profile, index) => (
          <BrowseProfile profile={profile} key={index} />
        ))}
        {profiles?.map((profile, index) => (
          <BrowseProfile profile={profile} key={index} />
        ))}
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
