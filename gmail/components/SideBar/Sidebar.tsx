import styles from "./SideBar.module.css";

import { Avatar, Badge } from "@material-ui/core";
import { IoMdAdd } from "react-icons/io";
import SideBarItem from "../SideBarItem/SideBarItem";
import { FaInbox } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import {
  AiFillStar,
  AiFillCaretDown,
  AiFillPhone,
  AiFillClockCircle,
  AiOutlineSend,
} from "react-icons/ai";
import { MdExpandMore, MdVideocam } from "react-icons/md";
import { FaRegKeyboard } from "react-icons/fa";
import { SiGooglehangouts } from "react-icons/si";
import { IoPersonSharp } from "react-icons/io5";
import React from "react";
import { IconButton } from "@material-ui/core";
const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__compose}>
        <IoMdAdd className={styles.sidebar__compose__icon} /> Compose
      </div>
      <SideBarItem
        badgeContent={"10"}
        title={"Inbox"}
        active={true}
        Icon={FaInbox}
      />
      <SideBarItem
        badgeContent={""}
        title={"Stared"}
        active={false}
        Icon={AiFillStar}
      />
      <SideBarItem
        badgeContent={""}
        title={"Snoozed"}
        active={false}
        Icon={AiFillClockCircle}
      />
      <SideBarItem
        badgeContent={"10"}
        title={"Sent"}
        active={false}
        Icon={AiOutlineSend}
      />
      <SideBarItem
        badgeContent={"3"}
        title={"Drafts"}
        active={false}
        Icon={IoMdDocument}
      />
      <SideBarItem
        badgeContent={""}
        title={"More"}
        active={false}
        Icon={MdExpandMore}
      />
      <h1>Meet</h1>
      <SideBarItem
        badgeContent={""}
        title={"New meeting"}
        active={false}
        Icon={MdVideocam}
      />
      <SideBarItem
        badgeContent={""}
        title={"Join a meeting"}
        active={false}
        Icon={FaRegKeyboard}
      />
      <h1>Hangouts</h1>
      <div className={styles.sidebar__profile}>
        <div>
          <Avatar className={styles.sidebar__profile__avatar} />

          <h1>username</h1>
          <AiFillCaretDown className={styles.sidebar__profile__icon} />
        </div>
        <IconButton>
          <IoMdAdd />
        </IconButton>
      </div>
      <div className={styles.sidebar__recent__chats}>
        <p>No resent chats</p>
        <p>Start a new one</p>
      </div>

      <div className={styles.sidebar__footer}>
        <p>
          <IoPersonSharp />
        </p>
        <p>
          <SiGooglehangouts />
        </p>
        <p>
          <AiFillPhone />
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
