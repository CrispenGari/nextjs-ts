import { useState } from "react";
import styles from "./Login.module.css";
import { FcGoogle } from "react-icons/fc";

import { signIn } from "next-auth/client";
const Login = ({ setHasAccount }) => {
  const [error, setError] = useState("");
  const login = (e) => {
    e.preventDefault();
    signIn()
      .then(() => {})
      .catch((error) => {
        setError("Unknown error while trying authenticating you.");
      });
  };
  return (
    <form className={styles.login}>
      <h1>Login</h1>
      <button type="submit" onClick={login}>
        <FcGoogle className={styles.login__google__icon} /> Google
      </button>
      <p>{error}</p>
      <p>
        I am a new user?{" "}
        <span onClick={() => setHasAccount(false)}>Register</span>
      </p>
    </form>
  );
};

export default Login;
