import styles from "./MainHeader.module.css";

import { BiCheckbox } from "react-icons/bi";
import { IoRefresh } from "react-icons/io5";
import { MdMoreVert } from "react-icons/md";
import { BiCaretDown } from "react-icons/bi";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const MainHeader = () => {
  return (
    <div className={styles.main__header}>
      <div className={styles.main__header__left}>
        <div title="Select">
          <BiCheckbox className={styles.main__header__icon} />
          <BiCaretDown className={styles.main__header__icon} />
        </div>
        <IoRefresh title="Refresh" className={styles.main__header__icon} />
        <MdMoreVert title="More" className={styles.main__header__icon} />
      </div>
      <div className={styles.main__header__right}>
        <div>1-50 of 147</div>
        <div>
          <FiChevronLeft title="Newer" className={styles.main__header__icon} />
          <FiChevronRight title="Older" className={styles.main__header__icon} />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
