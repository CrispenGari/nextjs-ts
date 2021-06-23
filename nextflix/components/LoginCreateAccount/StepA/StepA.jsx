import { useEffect, useRef, useState } from "react";
import styles from "./StepA.module.css";

const StepA = ({
  setStepToMount,
  createAccountEmail,
  setPasswordToCreateAccount,
  setEmailToCreateAccount,
}) => {
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState(createAccountEmail);
  const [password, setPassword] = useState("");
  const continueToStepB = (e) => {
    e.preventDefault();
    const expression = new RegExp(/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/gim);
    if (!emailError && !passwordError && expression.test(email)) {
      setEmailToCreateAccount(email);
      setPasswordToCreateAccount(password);
      setStepToMount("B");
    }
  };
  useEffect(() => {
    const expression = new RegExp(/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/gim);
    if (!email) {
      setEmailError("Email is required!");
    } else {
      setEmailError("");
      if (!expression.test(email)) {
        setEmailError("Invalid email address!");
      } else {
        setEmailError("");
      }
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
        <button type="submit" onClick={continueToStepB}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default StepA;
