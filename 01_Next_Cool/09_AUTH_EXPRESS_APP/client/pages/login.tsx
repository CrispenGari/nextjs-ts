import Link from "next/link";
import React, { useState } from "react";
import { LOGIN_MUTATION } from "../graphql/mutations/login";
import { apolloClient } from "../lib";
import { GetServerSidePropsContext } from "next";

import styles from "./Login.module.css";
import { COOKIE_QUERY } from "../graphql/queries/cookie";
import { useRouter } from "next/router";
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const userCookie: string = context.req.cookies?.user;
  const validCookie = await apolloClient.query({
    query: COOKIE_QUERY,
    variables: {
      input: userCookie ? userCookie : "",
    },
  });
  if (validCookie.data?.cookie) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
  return {
    props: {}, // will be passed to the page component as props
  };
}

const Login = () => {
  const [ue, setUe] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<any>();

  const router = useRouter();
  const loginH = async () => {
    setLoading(true);
    const { data } = await apolloClient.mutate({
      mutation: LOGIN_MUTATION,
      variables: {
        input: {
          usernameOrEmail: ue,
          password: pwd,
        },
        fetchPolicy: "network-only",
      },
    });

    setData(data);
    if ((await data?.login?.user) !== null) {
      setData(null);
      setLoading(false);
      await router.replace("/");
    } else {
      setLoading(false);
    }
  };

  return (
    <div className={styles.login}>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await loginH();
        }}
      >
        <h1>Login</h1>
        {loading && <p>loading...</p>}
        <input
          value={ue}
          onChange={(e) => setUe(e.target.value)}
          type="text"
          placeholder="username or email"
        />
        <input
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          type="password"
          placeholder="password"
        />

        {data?.login?.error?.message && <p>{data?.login?.error?.message}</p>}
        <button type="submit">Login</button>
        <Link href={"/register"}>Register</Link>
      </form>
    </div>
  );
};

export default Login;
