import Main from "../components/Main/Main";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/client";
import { useLayoutEffect, useEffect, useState } from "react";
const Home = () => {
  const [session, loading] = useSession();
  const [shortcuts, setShortcuts] = useState([]);

  useEffect(() => {
    document.title = "Google";
  }, []);

  useEffect(async () => {
    await fetch(
      `http://localhost:3000/api/shortcuts/get/${
        session?.user?.email ? session?.user?.email : "unknown@gmail.com"
      }`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setShortcuts(data));
  }, [session]);
  return (
    <div className={styles.home}>
      <Main shortcuts={shortcuts} />
    </div>
  );
};

export default Home;
