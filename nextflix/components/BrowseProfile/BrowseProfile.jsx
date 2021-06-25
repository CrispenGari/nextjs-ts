import styles from "./BrowseProfile.module.css";
import router from "next/router";
import { auth } from "../../firebase";
import { FiEdit2 } from "react-icons/fi";
const BrowseProfile = ({ profile: { avatar, name }, allowEdit }) => {
  return (
    <div
      className={styles.browse__profile}
      onClick={() => {
        if (!allowEdit) {
          router.push(
            `/?email=${auth?.currentUser.email.toLocaleLowerCase()}&profile=${name}`
          );
        }
      }}
    >
      <div className={styles.browse__profile__image}>
        <img src={avatar} alt="profile-avatar" />
      </div>
      <p>{name}</p>

      {allowEdit && (
        <div className={styles.browse__profile__edit}>
          <p>
            <FiEdit2 className={styles.browse__profile__edit__icon} />
          </p>
        </div>
      )}
    </div>
  );
};

export default BrowseProfile;
