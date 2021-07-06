import { IconButton, Avatar } from "@material-ui/core";
import styles from "./Header.module.css";
import { FiMenu, FiSettings } from "react-icons/fi";
import { VscSettings, VscQuestion } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { IoApps } from "react-icons/io5";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <IconButton>
          <FiMenu />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt="logo"
        />
      </div>
      <div className={styles.header__center}>
        <IconButton>
          <IoIosSearch />
        </IconButton>
        <input type="text" placeholder="Search mail" />
        <IconButton>
          <VscSettings />
        </IconButton>
      </div>
      <div className={styles.header__right}>
        <IconButton>
          <FiSettings />
        </IconButton>
        <IconButton>
          <VscQuestion />
        </IconButton>
        <IconButton>
          <IoApps />
        </IconButton>
        <Avatar className={styles.header__right__avatar} />
      </div>
    </div>
  );
};

export default Header;
