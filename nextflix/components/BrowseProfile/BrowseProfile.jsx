import styles from "./BrowseProfile.module.css";

const BrowseProfile = ({ profile: { avatar, username } }) => {
  return (
    <div className={styles.browse__profile}>
      <div className={styles.browse__profile__image}>
        <img src={avatar} alt="profile-avatar" />
      </div>
      <p>{username}</p>
    </div>
  );
};

export default BrowseProfile;
