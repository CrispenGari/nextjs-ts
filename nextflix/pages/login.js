import LoginHeader from "../components/LoginHeader/LoginHeader";
import styles from "../styles/Login.module.css";

import LoginCenter from "../components/LoginCenter/LoginCenter";

import Footer from "../components/LoginFooter/Footer";
import Rows from "../components/Rows";
import LoginCard from "../components/LoginCard/LoginCard";
import { useState } from "react";
import LoginCardFooter from "../components/LoginCardFooter/LoginCardFooter";
import React from "react";

const login = () => {
  const [cardToMount, setCardToMount] = useState("createAccount");
  return (
    <div
      className={cardToMount === "login" ? styles.login__small : styles.login}
    >
      <div className={styles.login__container}>
        <LoginHeader
          setCardToMount={setCardToMount}
          cardToMount={cardToMount}
        />
        <div
          className={
            cardToMount === "login"
              ? styles.login__container__center__small
              : styles.login__container__center
          }
        >
          {cardToMount !== "login" ? (
            <LoginCenter />
          ) : (
            <LoginCard
              setCardToMount={setCardToMount}
              cardToMount={cardToMount}
            />
          )}
        </div>
      </div>
      {cardToMount !== "login" ? (
        <React.Fragment>
          <div className={styles.login__rows}>
            <Rows />
          </div>
          <Footer />
        </React.Fragment>
      ) : (
        <LoginCardFooter />
      )}
    </div>
  );
};

export default login;
