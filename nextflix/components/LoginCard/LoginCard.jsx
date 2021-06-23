import styles from "./LoginCard.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { useState } from "react";
import router from "next/router";
import { auth } from "../../firebase";
const LoginCard = ({ setCardToMount, cardToMount }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        router.replace("/browse");
        setEmail("");
        setPassword("");
        setError("");
      })
      .catch((error) => {
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <div className={styles.login__card}>
      <h1>Sign In</h1>
      <form>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email or phone number"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <p className={styles.login__card__error}>{error}</p>
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
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
