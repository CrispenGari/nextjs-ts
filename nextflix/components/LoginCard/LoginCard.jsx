import styles from "./LoginCard.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
const LoginCard = ({ setCardToMount, cardToMount }) => {
  return (
    <div className={styles.login__card}>
      <h1>Sign In</h1>
      <form>
        <input type="text" placeholder="Email or phone number" />

        <input type="password" placeholder="Password" />

        <button>Sign In</button>
        <p>
          <label htmlFor="remember">
            <input type="checkbox" id="remember" />
            Remember me
          </label>

          <a>Need help?</a>
        </p>
      </form>
      <button>
        <FaFacebookSquare className={styles.login__facebook__icon} />
        Login with Facebook
      </button>
      <p>
        New to Netflix?{" "}
        <span onClick={() => setCardToMount("createAccount")}>Sign up now</span>
      </p>
      <p>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        <a>Learn more.</a>
      </p>
    </div>
  );
};

export default LoginCard;
