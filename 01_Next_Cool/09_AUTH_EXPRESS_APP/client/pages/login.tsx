import { useMutation } from "@apollo/client";
import Link from "next/link";
import React, { useState } from "react";
import { LOGIN_MUTATION } from "../graphql/mutations/login";
import { USER_QUERY } from "../graphql/queries/user";
import { apolloClient } from "../lib";

import styles from "./Login.module.css";

export async function getServerSideProps(context) {
  const user = await apolloClient.query({
    query: USER_QUERY,
  });
  if (user?.data?.user) {
    return {
      redirect: {
        permanent: true,
        destination: "/",
      },
    };
  }
  return {
    props: {
      user: null,
    }, // will be passed to the page component as props
  };
}

const Login = () => {
  const [ue, setUe] = useState("");
  const [pwd, setPwd] = useState("");
  const [login, { loading, data }] = useMutation(LOGIN_MUTATION);
  const loginH = async () => {
    await login({
      variables: {
        input: {
          usernameOrEmail: ue,
          password: pwd,
        },
      },
      fetchPolicy: "network-only",
    });
  };

  console.log(data);
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
