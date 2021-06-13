import { useState } from "react";
import styles from "./Register.module.css";
import Axios from "axios";
const Register = ({ setHasAccount }) => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [username, setUsername] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const register = (e) => {
    e.preventDefault();

    (async () =>
      await Axios({
        url: "http://localhost:3001/register",
        withCredentials: true,
        method: "POST",
        data: {
          email: email,
          username: username,
          password: password,
          photoUrl: photoUrl,
          confirmPassword: passwordConf,
        },
      })
        .then((res) => {
          if (res.data === "ok") {
            setError("");
            setPassword("");
            setEmail("");
            setPasswordConf("");
            setUsername("");
            console.log(res.data);
            return;
          } else {
            setPassword("");
            setPasswordConf("");
            setError(res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        }))();
  };
  return (
    <div className={styles.register}>
      <h1>Register</h1>
      <input
        type="email"
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
