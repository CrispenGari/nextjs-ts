import styles from "./HomeHeader.module.css";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
const HomeHeader = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const searchRef = useRef(null);
  return (
    <div className={styles.home__header}>
      <div className={styles.home__header__left}>
        <img
          draggable={false}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
          loading="lazy"
        />
        <h2>Home</h2>
        <h2>Tv Shows</h2>
        <h2>Movies</h2>
        <h2>New & Popular</h2>
        <h2>My List</h2>
      </div>
      <div className={styles.home__header__right}>
        {openSearch ? (
          <div className={styles.home__header__right__search} ref={searchRef}>
            <IoSearchSharp
              className={styles.home__header__right__search__icon}
            />
            <input autoFocus type="text" placeholder="Titles, people, genres" />
          </div>
        ) : (
          <IoSearchSharp
            className={styles.home__header__right__search__icon}
            onClick={() => setOpenSearch(true)}
          />
        )}
        <h2>Kids</h2>
        <IoMdNotifications className={styles.home__header__right__icon} />

        <div>
          <img
            src="https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png"
            alt="profile-avatar"
          />
          <MdArrowDropDown
            className={styles.home__header__right__icon__small}
          />
        </div>
        <div>
          <GiSettingsKnobs
            className={styles.home__header__right__icon__settings}
          />
          <MdArrowDropDown
            className={styles.home__header__right__icon__small}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
