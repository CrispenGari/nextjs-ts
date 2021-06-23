import LoginHeader from "../components/LoginHeader/LoginHeader";
import styles from "../styles/Login.module.css";
import LoginCenter from "../components/LoginCenter/LoginCenter";
import Footer from "../components/LoginFooter/Footer";
import Rows from "../components/Rows";
import LoginCard from "../components/LoginCard/LoginCard";
import { useEffect, useState } from "react";
import LoginCardFooter from "../components/LoginCardFooter/LoginCardFooter";
import LoginCreateAccount from "../components/LoginCreateAccount";
import React from "react";
import { auth } from "../firebase";
import router from "next/router";
const login = () => {
  const [cardToMount, setCardToMount] = useState("center");
  const [createAccountEmail, setCreateAccountEmail] = useState();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        router.replace(`/browse?email=${authUser?.email.toLocaleLowerCase()}`);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  if (cardToMount === "createAccount" && createAccountEmail) {
    return (
      <LoginCreateAccount
        setCardToMount={setCardToMount}
        createAccountEmail={createAccountEmail}
      />
    );
  }
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
            <LoginCenter
              setCreateAccountEmail={setCreateAccountEmail}
              setCardToMount={setCardToMount}
              withHeaders
            />
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
            <Rows
              setCreateAccountEmail={setCreateAccountEmail}
              setCardToMount={setCardToMount}
            />
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
