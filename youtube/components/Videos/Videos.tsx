import styles from "./Videos.module.css";
import axios from "axios";
import Video from "../Video/Video";
import data from "../../videos.json";
const Videos = () => {
  console.log(data.items);
  return (
    <div className={styles.videos}>
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <Video key={index} />
        ))}
    </div>
  );
};

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
