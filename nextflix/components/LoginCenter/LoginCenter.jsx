import styles from "./LoginCenter.module.css";
import { BiChevronRight } from "react-icons/bi";
import { useEffect, useState } from "react";
const LoginCenter = ({
  withHeaders,
  setCreateAccountEmail,
  setCardToMount,
}) => {
  const [email, setEmail] = useState("");

  const createAccountWithValidEmail = () => {
    const expression = new RegExp(/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/gim);
    if (expression.test(email)) {
      setCreateAccountEmail(email);
      setCardToMount("createAccount");
    }
  };

  if (withHeaders) {
    return (
      <div className={styles.login__center}>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className={styles.login__center__input}>
          <input
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={createAccountWithValidEmail}>
            Get Stated
            <BiChevronRight className={styles.login__center__button} />
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.login__center}>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className={styles.login__center__input}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={createAccountWithValidEmail}>
            Get Stated
            <BiChevronRight className={styles.login__center__button} />
          </button>
        </div>
      </div>
    );
  }
};

export default LoginCenter;
