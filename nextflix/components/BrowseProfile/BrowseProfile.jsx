import styles from "./BrowseProfile.module.css";
import router from "next/router";
import { auth } from "../../firebase";
const BrowseProfile = ({ profile: { avatar, name } }) => {
  return (
    <div
      className={styles.browse__profile}
      onClick={() => {
        router.push(
          `/?email=${auth?.currentUser.email.toLocaleLowerCase()}&profile=${name}`
        );
      }}
    >
      <div className={styles.browse__profile__image}>
        <img src={avatar} alt="profile-avatar" />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default BrowseProfile;
