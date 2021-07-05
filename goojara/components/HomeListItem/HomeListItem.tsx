import React from "react";
import styles from "./HomeListItem.module.css";
import { MdLocalMovies } from "react-icons/md";
import { GoDeviceDesktop } from "react-icons/go";
const HomeListItem: React.FC = () => {
  const randomIcon = Math.random();
  return (
    <div className={styles.home__list__item}>
      <div className={styles.home__list__item__left}>
        {randomIcon > 0.5 ? (
          <MdLocalMovies className={styles.home__list__item__left__icon1} />
        ) : (
          <GoDeviceDesktop className={styles.home__list__item__left__icon2} />
        )}
        <h1>
          Claw <span>(2021)</span>
        </h1>
      </div>
      <div className={styles.home__list__item__right}>
        {randomIcon > 0.5 ? "HDTV" : "HDR"}
      </div>
    </div>
  );
};

export default HomeListItem;
