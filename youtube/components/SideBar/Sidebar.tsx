import SideBarHeader from "../SideBarHeader/SideBarHeader";

import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SideBarHeader />
    </div>
  );
};

export default Sidebar;
