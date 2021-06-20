import styles from "./LoginCardFooter.module.css";

const LoginCardFooter = () => {
  return (
    <div className={styles.login__card__footer}>
      <div className={styles.login__card__footer__main}>
        <h4>Questions? Call 0 801-000-723</h4>
        <div className={styles.login__card__footer__container}>
          <a>FAQ</a>
          <a>Privacy</a>
          <a>Help Center</a>
          <a>Cookie Preferences</a>
          <a>Terms of Use</a>
          <a>Corporate Information</a>
        </div>
      </div>
    </div>
  );
};

export default LoginCardFooter;
