import styles from "./StepC.module.css";
import { IoCheckmarkCircleOutline, IoCheckmarkSharp } from "react-icons/io5";
import { auth } from "../../../firebase";
import Axios from "axios";
const StepC = ({
  emailToCreateAccount,
  passwordToCreateAccount,
  setPasswordToCreateAccount,
  setEmailToCreateAccount,
}) => {
  const createNetflixAccount = () => {
    auth
      .createUserWithEmailAndPassword(
        emailToCreateAccount,
        passwordToCreateAccount
      )
      .then((authUser) => {
        (async () => {
          await Axios.post("http://localhost:3001/new/user", {
            email: authUser.user.email?.toLocaleLowerCase(),
          }).then(() => {
            setPasswordToCreateAccount("");
            setEmailToCreateAccount("");
          });
        })();
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className={styles.step__c}>
      <IoCheckmarkCircleOutline className={styles.step__c__icon__a} />
      <h2>
        STEP <span>3</span> OF <span>3</span>
      </h2>
      <h1>You are all set. Confirm if the email is correct and click Finish</h1>
      <h3>
        <IoCheckmarkSharp className={styles.step__c__icon__b} />
        {emailToCreateAccount}
      </h3>
      <button onClick={createNetflixAccount}>Finish</button>
    </div>
  );
};
export default StepC;
