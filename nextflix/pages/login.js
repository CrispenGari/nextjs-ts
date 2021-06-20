import LoginHeader from "../components/LoginHeader/LoginHeader";
import styles from "../styles/Login.module.css";

import LoginCenter from "../components/LoginCenter/LoginCenter";

import Footer from "../components/LoginFooter/Footer";
import Columns from "../components/Columns";
const login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <LoginHeader />
        <div className={styles.login__container__center}>
          <LoginCenter />
        </div>
      </div>
      <div className={styles.login__columns}>
        <Columns />
      </div>
      <Footer />
    </div>
  );
};

export default login;
