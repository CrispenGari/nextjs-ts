import styles from "./LoginCreateAccountFooter.module.css";
const LoginCreateAccountFooter = () => {
  return (
    <div className={styles.login__create__account__footer}>
      <div className={styles.login__create__account__footer__center}>
        <h1>Questions? Call 0 801-000-723</h1>
        <div>
          <span>FAQ</span>
          <span>Help Center</span>
          <span>Terms of Use</span>
          <span>Privacy</span>
          <span>Cookie Preferences</span>
          <span> Corporate Information</span>
        </div>
      </div>
    </div>
  );
};

export default LoginCreateAccountFooter;
