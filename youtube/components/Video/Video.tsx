import { Avatar } from "@material-ui/core";
import styles from "./Video.module.css";
import { IoCheckmarkCircle } from "react-icons/io5";
const Video = () => {
  return (
    <div className={styles.video}>
      <img src="https://i.ytimg.com/vi/YQHsXMglC9A/sddefault.jpg" />
      <div className={styles.video__bottom}>
        <Avatar
          className={styles.video__bottom__avatar}
          src="https://i.ytimg.com/vi/YQHsXMglC9A/default.jpg"
        />
        <div className={styles.video__bottom__details}>
          <h1>Title</h1>
          <p>
            User <IoCheckmarkCircle className={styles.video__verified} />
          </p>
          <p>
            <span> 75M viewers</span>•<span>5 months ago</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
