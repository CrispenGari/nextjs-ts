import styles from "./Shortcuts.module.css";

import { IconButton } from "@material-ui/core";
import { BsCalendar } from "react-icons/bs";
import { FcCalendar } from "react-icons/fc";
import { VscLightbulb } from "react-icons/vsc";
import { CgGoogleTasks } from "react-icons/cg";
import { IoPersonCircle } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
const Shortcuts = () => {
  return (
    <div className={styles.shortcuts}>
      <IconButton title="Calender">
        <FcCalendar />
      </IconButton>
      <IconButton title="Keep">
        <VscLightbulb />
      </IconButton>
      <IconButton title="Tasks">
        <CgGoogleTasks />
      </IconButton>
      <IconButton title="Contacts">
        <IoPersonCircle />
      </IconButton>
      <div />
      <IconButton title="Get adds-ons">
        <IoIosAdd />
      </IconButton>
    </div>
  );
};

export default Shortcuts;
