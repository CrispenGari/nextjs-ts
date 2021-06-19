import styles from "./LoginCenter.module.css";
import { BiChevronRight } from "react-icons/bi";
const LoginCenter = () => {
  return (
    <div className={styles.login__center}>
      <h1>Unlimited movies, TV shows, and more.</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className={styles.login__center__input}>
        <input placeholder="Email address" />
        <button>
          Get Stated
          <BiChevronRight className={styles.login__center__button} />
        </button>
      </div>
    </div>
  );
};

export default LoginCenter;
