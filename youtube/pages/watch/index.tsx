import styles from "../../styles/Watch.module.css";
import WatchHeader from "../../components/WatchHeader/WatchHeader";
import { useRouter } from "next/router";
import YouTube from "react-youtube";
import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
const Watch = () => {
  const router = useRouter();
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    const query: string = String(router?.query?.v);
    setVideoId(query);
  }, [router]);

  const options = {
    // height: "100%",
    // width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className={styles.watch}>
      <WatchHeader />

      <div>
        {videoId && (
          <YouTube
            videoId={videoId}
            opts={{
              playerVars: {
                loop: 1,
                autoplay: 1,
                controls: 1,
              },
              width: "100%",
              height: `100%`,
            }}
            className={styles.watch__main}
          />
        )}
      </div>
    </div>
  );
};

export default Watch;
