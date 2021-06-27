import styles from "./ResultsNav.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BiImageAlt, BiNews } from "react-icons/bi";
import ResultsNavItem from "../ResultNavItem/ResultNavItem";
import { RiVideoLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { MdMoreVert } from "react-icons/md";
const ResultsNav = () => {
  return (
    <div className={styles.results__nav}>
      <div className={styles.results__nav__left}>
        <ResultsNavItem active Icon={AiOutlineSearch} text={"All"} />
        <ResultsNavItem Icon={BiImageAlt} text={"Images"} />
        <ResultsNavItem Icon={BiNews} text={"News"} />
        <ResultsNavItem Icon={RiVideoLine} text={"Videos"} />
        <ResultsNavItem Icon={IoLocationOutline} text={"Maps"} />
        <ResultsNavItem Icon={MdMoreVert} text={"More"} />
      </div>
      <div className={styles.results__nav__right}>
        <ResultsNavItem text={"Settings"} />
        <ResultsNavItem text={"Tools"} />
      </div>
    </div>
  );
};

export default ResultsNav;
