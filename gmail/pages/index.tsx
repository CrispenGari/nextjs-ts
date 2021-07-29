import styles from "../styles/Mail.module.css";
import Header from "../components/Header/Header";
import Sidebar from "../components/SideBar/Sidebar";
import Shortcuts from "../components/Shortcuts/Shortcuts";
import Main from "../components/Main/Main";
const Index = () => {
  return (
    <div className={styles.mail}>
      <Header />
      <div className={styles.mail__main}>
        <Sidebar />
        <Main />
        <Shortcuts />
      </div>
    </div>
  );
};

export default Index;
