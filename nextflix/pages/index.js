import styles from "../styles/Home.module.css";
import endpoints from "../endpoints";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import HomeFooter from "../components/HomeFooter/HomeFooter";
import HomeBarner from "../components/HomeBarner/HomeBarner";
import HomeRows from "../components/HomeRows";
import Axios from "axios";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import router from "next/router";
const Home = ({ discover, home_rows_data, profile }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (!authUser) {
        router.replace("/login");
      }
    });
    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    const profileName = router?.query?.profile;
    const userEmail = router?.query?.email;
    if (!userEmail && !profileName) {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <div className={styles.home__container__header__banner}>
          <HomeHeader profile={profile} />
          <HomeBarner movies={discover?.results} />
        </div>
      </div>
      <HomeRows data={discover?.results} home_rows_data={home_rows_data} />
      <HomeFooter />
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const base_url = "https://api.themoviedb.org/3";

  const profileName = await context?.query?.profile;
  const userEmail = await context?.query?.email;

  let data;
  if (userEmail) {
    const res = await Axios({
      url: `http://localhost:3001/profiles/${userEmail}`,
      method: "GET",
    });
    data = res.data;
  }

  const user = (await auth.currentUser) || null;
  const discover = await Axios({
    method: "GET",
    url: `${base_url}${endpoints.discover.url}`,
  });
  const now_playing = await Axios({
    method: "GET",
    url: `${base_url}${endpoints.now_playing.url}`,
  });
  const recommended = await Axios({
    method: "GET",
    url: `${base_url}${endpoints.recommended.url}`,
  });
  const trending = await Axios({
    method: "GET",
    url: `${base_url}${endpoints.trending.url}`,
  });
  const top_rated = await Axios({
    method: "GET",
    url: `${base_url}${endpoints.top_rated.url}`,
  });
  const popular = await Axios({
    method: "GET",
    url: `${base_url}${endpoints.popular.url}`,
  });
  const action = await Axios({
    method: "GET",
    url: `${base_url}${endpoints.action_movies.url}`,
  });
  const comedy = await Axios({
    method: "GET",
    url: `${base_url}${endpoints.comedy_movies.url}`,
  });
  const horror_movies = await Axios({
    method: "GET",
    url: `${base_url}${endpoints.horror_movies.url}`,
  });
  const documentaries = await Axios({
    method: "GET",
    url: `${base_url}${endpoints.documentaries.url}`,
  });

  const home_rows_data = [
    {
      title: "Now Playing",
      data: now_playing.data?.results,
    },
    {
      title: "Recommended",
      data: recommended.data?.results,
    },
    {
      title: "Trending",
      data: trending.data?.results,
    },
    {
      title: "Top Rated",
      data: top_rated.data?.results,
    },
    {
      title: "Popular",
      data: popular.data?.results,
    },
    {
      title: "Action",
      data: action.data?.results,
    },
    {
      title: "Comedy",
      data: comedy.data?.results,
    },
    {
      title: "Horror",
      data: horror_movies.data?.results,
    },
    {
      title: "Documentaries",
      data: documentaries.data?.results,
    },
  ];
  if (!data?.profiles) {
    return {
      props: {
        discover: discover.data,
        home_rows_data: home_rows_data,
        user,
      },
    };
  }
  return {
    props: {
      discover: discover.data,
      home_rows_data: home_rows_data,
      user,
      profile: data?.profiles?.filter(
        (profile) => profile?.name?.toLowerCase() === profileName
      )[0],
    },
  };
}
