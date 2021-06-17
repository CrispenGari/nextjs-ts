import styles from "./Header.module.css";
import Image from "next/image";
import HeaderItem from "../HeaderItem/HeaderItem";
// import {
//   HomeIcon,
//   LightningBoltIcon,
//   SearchIcon,
// } from "@heroicons/react/outline";
import { IoPersonOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { RiHomeLine, RiFoldersLine } from "react-icons/ri";
import { BsLightning, BsFolderCheck } from "react-icons/bs";
import { signOut, useSession } from "next-auth/client";
import { Avatar } from "@material-ui/core";

const Header = ({ setVideoId }) => {
  const [{ user }, loading] = useSession();
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <HeaderItem Icon={RiHomeLine} title={"Home"} setVideoId={setVideoId} />
        <HeaderItem
          Icon={BsLightning}
          title={"Trending"}
          setVideoId={setVideoId}
        />
        <HeaderItem
          Icon={BsFolderCheck}
          title={"Collections"}
          setVideoId={setVideoId}
        />
        <HeaderItem Icon={BiSearch} title={"Search"} setVideoId={setVideoId} />
        <HeaderItem
          Icon={IoPersonOutline}
          title={"Account"}
          setVideoId={setVideoId}
        />
      </div>
      <div className={styles.header__right}>
        <div>
          {loading ? (
            <p>loading...</p>
          ) : (
            <p>
              <Avatar
                alt={user?.name}
                src={user?.image}
                className={styles.header__right__avatar}
              />
              {user?.name}
            </p>
          )}
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
        <h1>hulu</h1>
      </div>
    </div>
  );
};
export default Header;
