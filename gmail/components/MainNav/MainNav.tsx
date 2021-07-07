import styles from "./MainNav.module.css";

import React from "react";
import MainNavItem from "../MainNavItem/MainNavItem";
import { FaInbox } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { GiStarProminences } from "react-icons/gi";
const MainNav: React.FC = () => {
  return (
    <div className={styles.main__nav}>
      <MainNavItem Icon={FaInbox} title="Primary" />
      <MainNavItem Icon={IoMdPeople} title="Social" subTitle="Twitter" />
      <MainNavItem
        Icon={GiStarProminences}
        title="Promotions"
        subTitle="Total insight, Medium Daily...."
      />
    </div>
  );
};

export default MainNav;
