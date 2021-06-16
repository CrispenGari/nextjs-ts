import styles from "./SearchResult.module.css";
import { Avatar } from "@material-ui/core";
import { IoCheckmarkCircle } from "react-icons/io5";
function abbreviateNumber(number) {
  let SI_SYMBOL = ["", "K", "M", "G", "T", "P", "E"];

  let tier = (Math.log10(Math.abs(number)) / 3) | 0;
  if (tier == 0) return number;
  let suffix = SI_SYMBOL[tier];
  let scale = Math.pow(10, tier * 3);
  let scaled = number / scale;
  return scaled.toFixed(1) + suffix;
}
const SearchResult = ({ video }) => {
  console.log(video);
  return (
    <div className={styles.search__result}>
      <img src={video?.snippet?.thumbnails?.standard?.url} />
      <div className={styles.search__result__details}>
        <h1>{video?.snippet?.title}</h1>
        <p>
          <span>
            {abbreviateNumber(Number(video?.statistics?.viewCount))} viewers
          </span>
          •<span>{String(video?.snippet?.publishedAt).split("-")[0]}</span>
        </p>
        <div>
          <Avatar
            className={styles.video__bottom__avatar}
            src={video?.snippet?.thumbnails?.standard?.url}
          />
          {video?.tags?.length > 0 && video?.tags[0]}
        </div>
        <p>{String(video?.snippet?.description).substr(0, 100)}...</p>
        <p>subtitles</p>
      </div>
    </div>
  );
};

export default SearchResult;
