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

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <HeaderItem Icon={RiHomeLine} title={"Home"} />
        <HeaderItem Icon={BsLightning} title={"Trending"} />
        <HeaderItem Icon={BsFolderCheck} title={"Collections"} />
        <HeaderItem Icon={BiSearch} title={"Search"} />
        <HeaderItem Icon={IoPersonOutline} title={"Account"} />
      </div>
      <div className={styles.header__right}>
        <h1>hulu</h1>
      </div>
    </div>
  );
};

export default Header;
