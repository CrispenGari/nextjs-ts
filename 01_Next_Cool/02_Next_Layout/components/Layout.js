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
