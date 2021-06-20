import LoginHeader from "../components/LoginHeader/LoginHeader";
import styles from "../styles/Login.module.css";

import LoginCenter from "../components/LoginCenter/LoginCenter";

import Footer from "../components/LoginFooter/Footer";
import Columns from "../components/Columns";
import LoginCard from "../components/LoginCard/LoginCard";
import { useState } from "react";
import LoginCardFooter from "../components/LoginCardFooter/LoginCardFooter";

const login = () => {
  const [cardToMount, setCardToMount] = useState("login");
  return (
    <div
      className={cardToMount === "login" ? styles.login__small : styles.login}
    >
      <div className={styles.login__container}>
        <LoginHeader />
        <div
          className={
            cardToMount === "login"
              ? styles.login__container__center__small
              : styles.login__container__center
          }
        >
          {/* <LoginCenter /> */}
          <LoginCard />
        </div>
      </div>
      {/* <div className={styles.login__columns}>
        <Columns />
      </div>
      <Footer /> */}
      <LoginCardFooter />
    </div>
  );
};

export default login;
