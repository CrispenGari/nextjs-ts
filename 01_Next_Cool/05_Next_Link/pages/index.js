import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";

export default () => (
  <div>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <h1> Home page</h1>
  </div>
);
