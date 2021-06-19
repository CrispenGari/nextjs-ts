import LoginHeader from "../components/LoginHeader/LoginHeader";
import styles from "../styles/Login.module.css";

import LoginCenter from "../components/LoginCenter/LoginCenter";

const login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <LoginHeader />
        <div className={styles.login__container__center}>
          <LoginCenter />
        </div>
      </div>
    </div>
  );
};

export default login;
// https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png
