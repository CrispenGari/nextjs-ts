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
        isSubscription={false}
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        Icon={MdExplore}
        title="Explore"
        isSubscription={false}
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        isSubscription={false}
        Icon={MdSubscriptions}
        title="Subscriptions"
      />
      <hr />
      <SideBarItem
        setActive={setActive}
        active={active}
        isSubscription={false}
        Icon={MdVideoLibrary}
        title="Library"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        isSubscription={false}
        Icon={MdHistory}
        title="History"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        isSubscription={false}
        Icon={MdWatchLater}
        title="Watch Later"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        isSubscription={false}
        Icon={RiVideoLine}
        title="Your Videos"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        isSubscription={false}
        Icon={AiFillLike}
        title="Liked Videos"
      />
      <hr />
      <h1>Subscriptions</h1>
      <SideBarItem
        setActive={setActive}
        active={active}
        isSubscription={true}
        Icon={AiFillLike}
        title="Comic Pastor"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        isSubscription={true}
        Icon={AiFillLike}
        title="Dj Keem"
      />
      <hr />
      <h1>More from YouTube</h1>
      <SideBarItem
        setActive={setActive}
        active={active}
        isSubscription={false}
        Icon={IoLogoYoutube}
        title="YouTube Premium"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        isSubscription={false}
        Icon={SiYoutubegaming}
        title="Gaming"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        isSubscription={false}
        Icon={CgMediaLive}
        title="Live"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        isSubscription={false}
        Icon={RiVideoLine}
        title="Sport"
      />
      <hr />
      <SideBarItem
        setActive={setActive}
        active={active}
        isSubscription={false}
        Icon={MdSettings}
        title="Settings"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        isSubscription={false}
        Icon={AiFillFlag}
        title="Report history"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        isSubscription={false}
        Icon={MdHelp}
        title="Help"
      />
      <SideBarItem
        setActive={setActive}
        active={active}
        isSubscription={false}
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
