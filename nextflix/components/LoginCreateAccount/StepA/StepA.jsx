import { useEffect, useRef, useState } from "react";
import styles from "./StepA.module.css";

const StepA = () => {
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    if (!email) {
      setEmailError("Email is required!");
    } else {
      setEmailError("");
    }
  }, [email]);

  useEffect(() => {
    if (!password) {
      setPasswordError("Password is required!");
    } else {
      if (password.length < 6) {
        setPasswordError("Password should be between 6 and 60 characters");
      } else {
        setPasswordError("");
      }
    }
  }, [password]);

  return (
    <div className={styles.step__a}>
      <h2>
        STEP <span>1</span> OF <span>3</span>
      </h2>
      <h1>Create your password</h1>
      <h3>
        Just a few more steps to watch Netflix — it’s personalized for you!
      </h3>
      <form>
        <div
          className={styles.step__a__input}
          style={
            emailError
              ? {
                  borderColor: "red",
                }
              : {
                  borderColor: "lightgray",
                }
          }
        >
          <span>Email</span>
          <input
            ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </div>
        <p>{emailError}</p>
        <div
          className={styles.step__a__input}
          style={
            passwordError
              ? {
                  borderColor: "red",
                }
              : {
                  borderColor: "lightgray",
                }
          }
        >
          <span>Add a password</span>
          <input
            ref={passwordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Add a password"
          />
        </div>
        <p>{passwordError}</p>
        <label htmlFor="checkbox">
          <input type="checkbox" id="checkbox" />
          Please do not email me Netflix special offers.
        </label>
        <button>Continue</button>
      </form>
    </div>
  );
};

export default StepA;
