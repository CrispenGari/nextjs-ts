import Image from "next/image";
import styles from "./Auth.module.css";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { useState } from "react";

const Auth = () => {
  const [hasAccount, setHasAccount] = useState(null);
  return (
    <div className={styles.auth}>
      <div className={styles.auth__header}>
        <div></div>
        <div
          className="
        "
        >
          <button onClick={() => setHasAccount(false)}>Register</button>
          <button onClick={() => setHasAccount(true)}>Login</button>
        </div>
      </div>
      <div className={styles.auth__main}>
        <img
          alt="logo"
          src="https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2020-08/Hulu_Logo-01_newgreen.png"
        />
        <h1>Watch thousands of TV shows and movies.</h1>

        {hasAccount === true ? (
          <Login setHasAccount={setHasAccount} />
        ) : hasAccount === false ? (
          <Register setHasAccount={setHasAccount} />
        ) : null}
      </div>
    </div>
  );
};

export default Auth;

// const logout = () => {
//     Axios.get("http://localhost:3001/auth/logout", {
//       withCredentials: true,
//     }).then((res) => {
//       window.location = "http://localhost:3000";
//     });
//   };
