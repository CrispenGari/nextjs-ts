import React from "react";
import styles from "./Nav.module.css";
import router from "next/router";
const Nav: React.FC = () => {
  const [path, setPath] = React.useState<string>();
  React.useEffect(() => {
    setPath(router.pathname);
  }, [router]);
  return (
    <div className={styles.nav}>
      <h1
        className={path === "/" ? styles.nav__active : ""}
        onClick={() => router.push("/")}
      >
        Browse
      </h1>
      <h1
        className={path === "/watch-movies" ? styles.nav__active : ""}
        onClick={() => router.push("/watch-movies")}
      >
        Movies
      </h1>
      <h1
        className={path === "/watch-series" ? styles.nav__active : ""}
        onClick={() => router.push("/watch-series")}
      >
        Series
      </h1>
    </div>
  );
};

export default Nav;
