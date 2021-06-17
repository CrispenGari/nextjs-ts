import styles from "./Videos.module.css";
import axios from "axios";
import Video from "../Video/Video";
import data from "../../videos.json";
const Videos = () => {
  return (
    <div className={styles.videos}>
      {data.items.map((video, index) => (
        <Video key={index} video={video} />
      ))}
    </div>
  );
};
export default Videos;
