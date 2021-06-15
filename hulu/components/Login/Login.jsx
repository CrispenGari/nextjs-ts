import { useState } from "react";
import styles from "./Login.module.css";
import Axios from "axios";
const Login = ({ setHasAccount }) => {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const login = (e) => {
    e.preventDefault();
    (async () =>
      await Axios({
        method: "POST",
        data: {
          username: email,
          password: password,
        },
        url: "http://localhost:3001/login",
        withCredentials: true,
      })
        .then((res) => {
          console.log(res);
          if (res.data === "ok") {
            setError("");
            setPassword("");
            setEmail("");
            return;
          } else {
            setPassword("");
            setError(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        }))();
  };
  return (
    <form className={styles.login}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username or Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>{error}</p>
      <button type="submit" onClick={login}>
        Login
      </button>
      <p>
        I am a new user?{" "}
        <span onClick={() => setHasAccount(false)}>Register</span>
      </p>
    </form>
  );
};

export default Login;
