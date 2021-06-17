import { useState } from "react";
import styles from "./Register.module.css";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/client";
const Register = ({ setHasAccount }) => {
  const [error, setError] = useState("");
  const register = (e) => {
    e.preventDefault();
    e.preventDefault();
    signIn()
      .then(() => {})
      .catch((error) => {
        setError("Unknown error while trying authenticating you.");
      });
  };
  return (
    <div className={styles.register}>
      <h1>Register</h1>
      <button type="submit" onClick={register}>
        <FcGoogle className={styles.register__google__icon} /> Google
      </button>
      <p>{error}</p>
      <p>
        Already have an account?{" "}
        <span onClick={() => setHasAccount(true)}>Login</span>
      </p>
    </div>
  );
};

export default Register;
