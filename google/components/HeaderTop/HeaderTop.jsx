import { Avatar, IconButton } from "@material-ui/core";
import { Apps } from "@material-ui/icons";
import Link from "next/link";
import styles from "./HeaderTop.module.css";
const HeaderTop = () => {
  return (
    <div className={styles.header__top}>
      <Link href="#">Gmail</Link>
      <Link href="#">Images</Link>
      <IconButton className={styles.header__top__icon__btn}>
        <Apps />
      </IconButton>
      <Avatar
        src="https://lh3.googleusercontent.com/ogw/ADea4I4T1Shv2EAp8ajh6XbnOZ2XN0zHfEtuUeMYL1Nd=s32-c-mo"
        alt="google"
        className={styles.header__avatar}
      />
    </div>
  );
};

export default HeaderTop;
