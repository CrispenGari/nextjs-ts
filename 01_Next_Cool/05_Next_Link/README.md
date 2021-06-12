### Link

Client-side transitions between routes can be enabled via the Link component exported by `next/link`.

### Basic routing

Let's say we have 2 pages which is the home `/` and the about `/about` and we want to navigate between them we can use the Link tag to do that. The same as using the `react-router-dom` Link when clicked it does not refreshes the page.

### `index.js`

```js
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
```

### `about.js`

```js
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
```

Now we can navigate between the two pages without even refreshing the page.

For more [Read the Docs](https://nextjs.org/docs/api-reference/next/link)
