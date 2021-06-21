import styles from "./HomeFooter.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
import { GrYoutube } from "react-icons/gr";
const HomeFooter = () => {
  return (
    <div className={styles.home__footer}>
      <div className={styles.home__footer__main}>
        <div>
          <AiFillFacebook className={styles.home__footer__social__button} />
          <ImInstagram className={styles.home__footer__social__button} />
          <GrYoutube className={styles.home__footer__social__button} />
        </div>
        <div className={styles.home__footer__main__links}>
          <p>Audio and Subtitles</p>
          <p>Help Center</p>
          <p>Media Center</p>
          <p>Jobs</p>
          <p>Privacy</p>
          <p>Cookie Preferences</p>
          <p>Contact Us</p>
          <p>Audio Description</p>
          <p>Gift Cards</p>
          <p>Investor Relations</p>
          <p>Terms of use</p>
          <p>Legal Notices</p>
          <p>Corporate Information</p>
        </div>
        <button>Service Code</button>
        <p>1997-2021 Netflix, Inc. [1b1ksosuiqsoagahejaiospjaiu67290]</p>
      </div>
    </div>
  );
};

export default HomeFooter;
