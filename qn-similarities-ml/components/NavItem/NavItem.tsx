import React from "react";
import Link from "next/link";
import styles from "./NavItem.module.css";
class Props {
  public href: string;
  public title: string;
  public active?: boolean;
}

const NavItem: React.FC<Props> = ({ href, title, active }) => {
  return (
    <div className={active ? styles.navitem__active : styles.navitem}>
      <Link href={href}>{title}</Link>
    </div>
  );
};
export default NavItem;
