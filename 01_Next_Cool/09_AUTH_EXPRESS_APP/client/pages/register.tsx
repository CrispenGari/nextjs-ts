import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { REGISTER_MUTATION } from "../graphql/mutations/register";
import { COOKIE_QUERY } from "../graphql/queries/cookie";
import { apolloClient } from "../lib";
import styles from "./Login.module.css";

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

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<any>();

  const router = useRouter();
  const registerH = async () => {
    setLoading(true);
    const { data } = await apolloClient.mutate({
      mutation: REGISTER_MUTATION,
      variables: {
        input: {
          username,
          email,
          password: pwd,
        },
        fetchPolicy: "network-only",
      },
    });
    setData(data);
    if ((await data?.register?.user) !== null) {
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
          await registerH();
        }}
      >
        <h1>Register</h1>
        {loading && <p>loading...</p>}
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          type="password"
          placeholder="password"
        />
        {data?.register?.error?.message && (
          <p>{data?.register?.error?.message}</p>
        )}
        <button type="submit">Register</button>
        <Link href={"/login"}>Login</Link>
      </form>
    </div>
  );
};

export default Register;
