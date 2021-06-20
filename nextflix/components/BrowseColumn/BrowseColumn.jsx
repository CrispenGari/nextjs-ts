import styles from "./BrowseColumn.module.css";
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
const BrowseColumn = () => {
  return (
    <div className={styles.browse__column}>
      <div className={styles.browse__column__profiles}>
        {profiles?.map((profile, index) => (
          <BrowseProfile profile={profile} key={index} />
        ))}
        {profiles?.map((profile, index) => (
          <BrowseProfile profile={profile} key={index} />
        ))}
      </div>
      <div className={styles.browse__column___add__profile__container}>
        <div className={styles.browse__column___add__profile}>
          <IoAddCircle className={styles.browse__column___add__profile__icon} />
        </div>
        <p>Add Profile</p>
      </div>
    </div>
  );
};

export default BrowseColumn;
