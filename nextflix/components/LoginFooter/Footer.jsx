import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__main}>
        <div className={styles.footer__top}>
          <p>Questions? Call 0 801-000-723</p>
        </div>
        <div className={styles.footer__center}>
          <a>FAQ</a>
          <a>Media Center</a>
          <a>Redeem Gift Card</a>
          <a>Privacy</a>
          <a>Contact Us</a>
          <a>Netflix Originals</a>

          <a>Help Center</a>
          <a>Investor Relations</a>
          <a>Ways to Watch</a>
          <a>Cookie Preferences</a>
          <a>Speed Test</a>

          <a>Account</a>
          <a>Jobs</a>
          <a>Terms of Use</a>
          <a>Corporate Information</a>
          <a>Legal Notices</a>
        </div>
        <div className={styles.footer__bottom}>
          <p>Netflix South Africa</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
