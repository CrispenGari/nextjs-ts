import { Avatar } from "@material-ui/core";
import styles from "./Video.module.css";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useRouter } from "next/router";

function abbreviateNumber(number) {
  let SI_SYMBOL = ["", "K", "M", "G", "T", "P", "E"];

  let tier = (Math.log10(Math.abs(number)) / 3) | 0;
  if (tier == 0) return number;
  let suffix = SI_SYMBOL[tier];
  let scale = Math.pow(10, tier * 3);
  let scaled = number / scale;
  return scaled.toFixed(1) + suffix;
}
const Video = ({ video }) => {
  const router = useRouter();
  const playVideo = (id) => {
    router.push(`/watch?v=${id}`);
  };
  return (
    <div className={styles.video} onClick={() => playVideo(video?.id?.videoId)}>
      <img src={video?.snippet?.thumbnails?.default?.url} />
      <div className={styles.video__bottom}>
        <Avatar
          className={styles.video__bottom__avatar}
          src={video?.snippet?.thumbnails?.default?.url}
        />
        <div className={styles.video__bottom__details}>
          <h1>{video?.snippet?.title}</h1>
          <p>
            {video?.snippet?.channelTitle}{" "}
            <IoCheckmarkCircle className={styles.video__verified} />
          </p>
          <p>
            <span>
              {video?.statistics?.viewCount
                ? abbreviateNumber(Number(video?.statistics?.viewCount))
                : "none"}{" "}
              viewers
            </span>
            •<span>{String(video?.snippet?.publishedAt).split("-")[0]}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
