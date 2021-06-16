import styles from "./Videos.module.css";
import axios from "axios";
import Video from "../Video/Video";
import data from "../../videos.json";
const Videos = () => {
  console.log(data.items);
  return (
    <div className={styles.videos}>
      {data.items.map((video, index) => (
        <Video key={index} video={video} />
      ))}
    </div>
  );
};

// https://www.googleapis.com/youtube/v3/search?q=hello&key=AIzaSyB6hlT13melSfOZcvTnkXil-R4m5WvHPP4

export default Videos;

// export async function getSeverSideProps(context) {
//   await axios
//     .get("../../videos.json")
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((error) => console.log(error));

//   return {
//     props: {
//       //   data: {},
//     },
//   };
// }
