import SideBarHeader from "../SideBarHeader/SideBarHeader";
import SideBarItem from "../SideBarItem/SideBarItem";
import styles from "./Sidebar.module.css";

import {
  MdExplore,
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdWatchLater,
  MdHelp,
  MdFeedback,
  MdSettings,
} from "react-icons/md";
import { CgMediaLive } from "react-icons/cg";
import { IoMdHome, IoLogoYoutube } from "react-icons/io";
import { AiFillLike, AiFillFlag, AiFillTrophy } from "react-icons/ai";
import { RiVideoLine } from "react-icons/ri";
import { SiYoutubegaming } from "react-icons/si";
import { useState } from "react";
const Sidebar = () => {
  const [active, setActive] = useState("Home");
  return (
    <div className={styles.sidebar}>
      <SideBarHeader />
      <SideBarItem
        Icon={IoMdHome}
        title="Home"
        setActive={setActive}
        active={active}
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        Icon={MdExplore}
        title="Explore"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        Icon={MdSubscriptions}
        title="Subscriptions"
      />
      <hr />
      <SideBarItem
        setActive={setActive}
        active={active}
        Icon={MdVideoLibrary}
        title="Library"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        Icon={MdHistory}
        title="History"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        Icon={MdWatchLater}
        title="Watch Later"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        Icon={RiVideoLine}
        title="Your Videos"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        Icon={AiFillLike}
        title="Liked Videos"
      />
      <hr />
      <h1>Subscriptions</h1>
      <hr />
      <h1>More from YouTube</h1>
      <SideBarItem
        setActive={setActive}
        active={active}
        Icon={IoLogoYoutube}
        title="YouTube Premium"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        Icon={SiYoutubegaming}
        title="Gaming"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        Icon={CgMediaLive}
        title="Live"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        Icon={RiVideoLine}
        title="Sport"
      />
      <hr />
      <SideBarItem
        setActive={setActive}
        active={active}
        Icon={MdSettings}
        title="Settings"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        Icon={AiFillFlag}
        title="Report history"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        Icon={MdHelp}
        title="Help"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        Icon={MdFeedback}
        title="Send feedback"
      />
      <hr />
      <p>
        <span>About</span>
        <span>Press</span>
        <span>Copyright</span>
        <span>Contact us</span>
        <span>Creator</span>
        <span>Advertise</span>
        <span>Developers</span>
        <span>Terms</span>
        <span> Privacy</span>
        <span>Policy & Safety</span>
        <span>How YouTube works</span>
        <span>Test new features</span>
      </p>

      <p>© 2021 Google LLC</p>
    </div>
  );
};

export default Sidebar;
