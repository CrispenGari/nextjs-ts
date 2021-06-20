import styles from "./BrowseHeader.module.css";

const BrowseHeader = () => {
  return (
    <div className={styles.browse__header}>
      <img
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="logo"
        draggable={false}
      />
    </div>
  );
};

export default BrowseHeader;
