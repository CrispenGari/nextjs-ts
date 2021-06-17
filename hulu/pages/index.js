import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Movies from "../components/Movies/Movies";
import Auth from "../components/Auth/Auth";
import endpoints from "../utils/endpoints";
import Axios from "axios";
import { useState } from "react";
const Home = ({ data, user }) => {
  const [videoId, setVideoId] = useState("");
  return (
    <div className={styles.app}>
      {user ? (
        <Auth />
      ) : (
        <>
          <Header setVideoId={setVideoId} />
          <Nav setVideoId={setVideoId} />
          <Movies
            movies={data?.results}
            setVideoId={setVideoId}
            videoId={videoId}
          />
        </>
      )}
    </div>
  );
};

export default Home;
export async function getServerSideProps(context) {
  const category = Object.keys(context.query)[0];
  console.log("Wait...");
  const { data } = await Axios({
    method: "GET",
    url: category
      ? `https://api.themoviedb.org/3${endpoints[category]?.url}`
      : `https://api.themoviedb.org/3${endpoints["recommended"]?.url}`,
  });

  let user;
  await Axios({
    method: "GET",
    url: "http://localhost:3001/user",
    withCredentials: true,
  }).then((res) => {
    console.log(res);
    user = res.data;
  });

  return {
    props: {
      data,
      user,
    },
  };
}
