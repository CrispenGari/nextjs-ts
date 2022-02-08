import styles from "../styles/Home.module.css";

import { apolloClient } from "../lib";
import { NextPage } from "next";
import { COOKIE_QUERY } from "../graphql/queries/cookie";
import { useQuery } from "@apollo/client";
import { USER_QUERY } from "../graphql/queries/user";
import { LOGOUT_MUTATION } from "../graphql/mutations/logout";

export async function getServerSideProps(context) {
  const userCookie: string = context.req.cookies?.user;

  const validCookie = await apolloClient.query({
    query: COOKIE_QUERY,
    variables: {
      input: userCookie ? userCookie : "",
    },
  });
  if (!validCookie.data?.cookie) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
  return {
    props: {}, // will be passed to the page component as props
  };
}

const Home: NextPage = ({}) => {
  const { loading, data } = useQuery(USER_QUERY, {
    fetchPolicy: "network-only",
  });

  const logoutHandler = async () => {
    await apolloClient.mutate({
      mutation: LOGOUT_MUTATION,
      fetchPolicy: "network-only",
    });
    await window.location.reload();
  };

  return (
    <div className={styles.app}>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <div>
          <h3>User Data</h3>
          <pre>
            <code>{JSON.stringify(data.user)}</code>
          </pre>
          <button onClick={logoutHandler}>LOGOUT</button>
        </div>
      )}
    </div>
  );
};

export default Home;
