import styles from "./Nav.module.css";
import { useRouter } from "next/router";
import endpoints from "../../utils/endpoints";
const Nav = ({ setVideoId }) => {
  const router = useRouter();
  const query = Object.keys(router.query)[0];
  return (
    <div className={styles.nav}>
      {query
        ? Object.entries(endpoints).map(([key, { url, title }], index) => (
            <h1
              className={
                query?.toLowerCase() === key.toLowerCase() ? styles.active : ""
              }
              onClick={() => {
                router.push(`?${key.toLowerCase()}`);
                setVideoId("");
              }}
              key={key}
            >
              {title}
            </h1>
          ))
        : Object.entries(endpoints).map(([key, { url, title }], index) => (
            <h1
              className={index === 0 ? styles.active : ""}
              onClick={() => {
                router.push(`?${key.toLowerCase()}`);
                setVideoId("");
              }}
              key={key}
            >
              {title}
            </h1>
          ))}
    </div>
  );
};

export default Nav;
