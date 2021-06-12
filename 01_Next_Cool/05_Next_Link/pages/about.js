import React from "react";
import Link from "next/link";
export default () => {
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <h1>About page</h1>
    </div>
  );
};
