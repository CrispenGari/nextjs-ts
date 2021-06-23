import styles from "./StepB.module.css";
import { IoCheckmarkCircleOutline, IoCheckmarkSharp } from "react-icons/io5";
const StepB = () => {
  return (
    <div className={styles.step__b}>
      <IoCheckmarkCircleOutline className={styles.step__b__icon__a} />
      <h2>
        STEP <span>2</span> OF <span>3</span>
      </h2>
      <h1>Choose your plan.</h1>
      <h3>
        <IoCheckmarkSharp className={styles.step__b__icon__b} />
        No commitments, cancel anytime.
      </h3>
      <h3>
        <IoCheckmarkSharp className={styles.step__b__icon__b} />
        Everything on Netflix for one low price.
      </h3>
      <h3>
        <IoCheckmarkSharp className={styles.step__b__icon__b} />
        Unlimited viewing on all your devices.
      </h3>
      <button>Skip</button>
    </div>
  );
};

export default StepB;
