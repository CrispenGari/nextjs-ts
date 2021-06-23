import { useRef, useState } from "react";
import styles from "./BrowseAddProfile.module.css";
import Axios from "axios";
import router from "next/router";
const avatars = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",
  "https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png",
];
const BrowseAddProfile = ({ setCreateProfile }) => {
  const [name, setName] = useState("");
  const email = router.query?.email;
  const createNetflixProfile = () => {
    if (name.length >= 3) {
      const random_avatar_index = Math.round(Math.random() * 10) % 2;
      if (email) {
        (async () => {
          await Axios({
            method: "PATCH",
            url: `http://localhost:3001/new/profile/${email?.toLocaleLowerCase()}`,
            data: {
              name: name,
              avatar: avatars[random_avatar_index],
            },
          })
            .then(() => {
              setCreateProfile(false);
              setName("");
            })
            .catch((error) => {
              console.log(error);
            });
        })();
      }
    }
  };
  return (
    <div className={styles.browse__add__profile}>
      <h1>Browse Add</h1>
      <p>Add a profile for another person watching Netflix.</p>
      <div className={styles.browse__add__profile__center}>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="is-kid-check">
          <input type="checkbox" id="is-kid-check" />
          Kid?
        </label>
      </div>
      <div className={styles.browse__add__profile__buttons}>
        <button onClick={createNetflixProfile} disabled={!name.length >= 3}>
          Continue
        </button>
        <button onClick={() => setCreateProfile(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default BrowseAddProfile;
