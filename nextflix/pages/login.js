import LoginHeader from "../components/LoginHeader/LoginHeader";
import styles from "../styles/Login.module.css";

const login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <LoginHeader />
      </div>
    </div>
  );
};

export default login;
