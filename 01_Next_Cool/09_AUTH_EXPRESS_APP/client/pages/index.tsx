import styles from "../styles/Home.module.css";

import { apolloClient } from "../lib";
import { USER_QUERY } from "../graphql/queries/user";
import { NextPage } from "next";

export async function getServerSideProps(context) {
  const user = await apolloClient.query({
    query: USER_QUERY,
  });

  if (!user?.data?.user) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
  return {
    props: {
      user: JSON.stringify(user.data.user, null, 2),
    }, // will be passed to the page component as props
  };
}

const Home: NextPage<{ user: any }> = ({ user }) => {
  return (
    <div className={styles.app}>
      <h1>{user}</h1>
    </div>
  );
};

export default Home;
