import styles from "./index.module.css";
import StepA from "./StepA/StepA";
import StepB from "./StepB/StepB";
import StepC from "./StepC/StepC";
import LoginCreateAccountFooter from "./LoginCreateAccountFooter/LoginCreateAccountFooter";
import { useState } from "react";
import router from "next/router";
const Index = ({ createAccountEmail, setCardToMount }) => {
  const [stepToMount, setStepToMount] = useState("A");
  const [emailToCreateAccount, setEmailToCreateAccount] = useState("");
  const [passwordToCreateAccount, setPasswordToCreateAccount] = useState("");
  return (
    <div className={styles.index}>
      <div className={styles.index__header}>
        <img
          draggable={false}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          loading="lazy"
          alt="logo"
          onClick={() => {
            router.replace("/login");
            setCardToMount("center");
          }}
        />
        <button onClick={() => setCardToMount("login")}>Sign In</button>
      </div>
      <div className={styles.index__main}>
        {stepToMount === "A" ? (
          <StepA
            setStepToMount={setStepToMount}
            createAccountEmail={createAccountEmail}
            setPasswordToCreateAccount={setPasswordToCreateAccount}
            setEmailToCreateAccount={setEmailToCreateAccount}
          />
        ) : stepToMount === "B" ? (
          <StepB setStepToMount={setStepToMount} />
        ) : (
          <StepC
            setPasswordToCreateAccount={setPasswordToCreateAccount}
            setEmailToCreateAccount={setEmailToCreateAccount}
            emailToCreateAccount={emailToCreateAccount}
            passwordToCreateAccount={passwordToCreateAccount}
          />
        )}
      </div>
      <LoginCreateAccountFooter />
    </div>
  );
};

export default Index;
