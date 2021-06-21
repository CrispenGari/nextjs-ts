import styles from "./BrowseAddProfile.module.css";

const BrowseAddProfile = ({ setCreateProfile }) => {
  return (
    <div className={styles.browse__add__profile}>
      <h1>Browse Add</h1>
      <p>Add a profile for another person watching Netflix.</p>
      <div className={styles.browse__add__profile__center}>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" />
        <input type="text" placeholder="Name" />
        <label htmlFor="is-kid-check">
          <input type="checkbox" id="is-kid-check" />
          Kid?
        </label>
      </div>
      <div className={styles.browse__add__profile__buttons}>
        <button>Continue</button>
        <button onClick={() => setCreateProfile(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default BrowseAddProfile;
