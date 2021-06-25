import BrowseRow from "../BrowseRow/BrowseRow";
import styles from "./BrowseManageAccounts.module.css";
const BrowseManageAccounts = ({
  profiles,
  setCreateProfile,
  setManageAccounts,
}) => {
  return (
    <div className={styles.browse__manage__account}>
      <h1>Manage Profiles:</h1>
      <BrowseRow
        allowEdit={true}
        profiles={profiles}
        setCreateProfile={setCreateProfile}
      />
      <button onClick={() => setManageAccounts(false)}>Done</button>
    </div>
  );
};

export default BrowseManageAccounts;
