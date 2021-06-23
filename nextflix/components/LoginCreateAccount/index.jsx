import styles from "./index.module.css";
import StepA from "./StepA/StepA";
import StepB from "./StepB/StepB";
import StepC from "./StepC/StepC";
import LoginCreateAccountFooter from "./LoginCreateAccountFooter/LoginCreateAccountFooter";
import { useState } from "react";
const Index = () => {
  const [stepToMount, setStepToMount] = useState("C");
  return (
    <div className={styles.index}>
      <div className={styles.index__header}>
        <img
          draggable={false}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          loading="lazy"
          alt="logo"
        />
        <button>Sign In</button>
      </div>
      <div className={styles.index__main}>
        {stepToMount === "A" ? (
          <StepA />
        ) : stepToMount === "B" ? (
          <StepB />
        ) : (
          <StepC />
        )}
      </div>
      <LoginCreateAccountFooter />
    </div>
  );
};

export default Index;
