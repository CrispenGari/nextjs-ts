import styles from "./MainNavItem.module.css";

import React from "react";

interface IconProps {
  className: string;
}
interface MainNavItemProp {
  Icon: React.FC<IconProps>;
  title: string;
  subTitle?: string;
}
const MainNavItem: React.FC<MainNavItemProp> = ({ Icon, title, subTitle }) => {
  return (
    <div className={styles.main__nav__item}>
      <Icon className={styles.main__nav__icon} />
      <div>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default MainNavItem;
