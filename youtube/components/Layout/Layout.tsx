import Head from "../Head/Head";
import styles from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head />
      {children}
    </div>
  );
};

export default Layout;
