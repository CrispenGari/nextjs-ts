import styles from "./MainHeader.module.css";
import { IoMdNotifications, IoMdSearch, IoMdMic } from "react-icons/io";
import { RiVideoAddFill } from "react-icons/ri";
import { IoApps } from "react-icons/io5";
import { Avatar, IconButton } from "@material-ui/core";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
const MainHeader = () => {
  return (
    <div className={styles.main__header}>
      <div className={styles.main__header__top}>
        <div className={styles.main__header__top__left}>
          <div className={styles.main__header__top__left__search}>
            <input placeholder="Search" />
            <div>
              <IoMdSearch
                className={styles.main__header__top__left__search__icon}
              />
            </div>
          </div>
          <IconButton className={styles.main__header__top__button}>
            <IoMdMic className={styles.main__header__top__icon} />
          </IconButton>
        </div>
        <div className={styles.main__header__top__right}>
          <IconButton className={styles.main__header__top__button}>
            <RiVideoAddFill className={styles.main__header__top__icon} />
          </IconButton>
          <IconButton className={styles.main__header__top__button}>
            <IoApps className={styles.main__header__top__icon} />
          </IconButton>
          <IconButton className={styles.main__header__top__button}>
            <IoMdNotifications className={styles.main__header__top__icon} />
          </IconButton>
          <Avatar className={styles.main__header__avatar} />
        </div>
      </div>
      <div className={styles.main__header__bottom}>
        <div className={styles.main__header__bottom__left}>
          <MdChevronLeft
            className={styles.main__header__bottom__left__right_icon}
          />
        </div>
        <div className={styles.main__header__bottom__center}>
          <p>All</p>
          <p>Ai</p>
          <p>Data Science</p>
          <p>Kids</p>
          <p>Music</p>
          <p>Hip Hop</p>
          <p>News</p>
          <p>Masha and The Bear</p>
          <p>Sophia Robot</p>
          <p>Chill out Music</p>
          <p>Live</p>
        </div>
        <div className={styles.main__header__bottom__right}>
          <MdChevronRight
            className={styles.main__header__bottom__left__right_icon}
          />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
