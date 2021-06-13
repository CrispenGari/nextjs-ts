import { useState } from "react";
import styles from "./Login.module.css";
const Login = ({ setHasAccount }) => {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const login = (e) => {
    e.preventDefault();
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
