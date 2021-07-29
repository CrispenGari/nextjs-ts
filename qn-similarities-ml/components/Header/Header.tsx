import React from "react";
import styles from "./Header.module.css";
import { useRouter } from "next/router";
import NavItem from "../NavItem/NavItem";

const Header: React.FC<any> = () => {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <NavItem active title="Home" href="/" />
      <NavItem title="History" href="/history" />
    </div>
  );
};

export default Header;
