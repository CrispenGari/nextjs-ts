### The Layout Component.

This component is the wrapper of the application. Let's say we have the following structure of our application.

```js
            Layout
    |---------------------|
    |                     |
    |  |---------------|  |
    |  |      App      |  |
    |  |---------------|  |
    |                     |
    |---------------------|

* The whole thing that covers the [ App ] is our Layout
* A layout contains components that you you need to access throughout the whole application
```

The layout component contains components like, Header, NavBars which need to appear throughout all pages.

### How to create a `Layout` Component?

- First we need to create a component folder.
- The naming convention that is best in next.js is:

```
Pages       -> Name them using lower case e.g. about.js, home.js
Components  -> Name them using camel case eg NavBar.js, Layout.js
```

### Structuring Folders

```
app
    .next
    components
        Head.js
        Layout.js
        Layout.module.css
        Nav.js
    node_modules
    pages
        _app.js
        about.js
        index.js
    static
    styles
        globals.css
    .gitignore
    next.config.js
    package.json
    README.md
    yarn.lock
```

Go ahead and create a `_app.js` file so that we can override the next's default.

### `_app.js`

- Import the Layout file
- Make sure that it wraps the `Component`

```js
import "../styles/globals.css";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
```

Now Create a `Layout.js` inside the components folder

### `Layout.js`

```js
import React from "react";
import styles from "./Layout.module.css";
import Head from "./Head";
import Nav from "./Nav";
const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head />
      <Nav />
      <h1>The layout Container</h1>
      {/* Header */}
      {children}
      {/* Footer */}
    </div>
  );
};
export default Layout;
```

- Create a Head and Nav components
- Check their structure in the filenames themselves.

So now if you run the server and navigate through different pages you will see all components that are in the application appearing on all the pages.
