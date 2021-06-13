import { useState } from "react";
import styles from "./Register.module.css";
const Register = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [username, setUsername] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Photo URL (optional)"
        value={photoUrl}
        onChange={(e) => setPhotoUrl(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={passwordConf}
        onChange={(e) => setPasswordConf(e.target.value)}
      />
      <p>{error}</p>
      <button type="submit" onClick={register}>
        Register
      </button>
      <p>
        Already have an account?{" "}
        <span onClick={() => setHasAccount(true)}>Login</span>
      </p>
    </div>
  );
};

export default Register;
