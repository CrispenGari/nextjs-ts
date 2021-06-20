import styles from "./LoginHeader.module.css";
const LoginHeader = ({ setCardToMount, cardToMount }) => {
  return (
    <div className={styles.login__header}>
      <img
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="logo"
        draggable={false}
      />
      {cardToMount !== "login" && (
        <button onClick={() => setCardToMount("login")}>Sign In</button>
      )}
    </div>
  );
};

export default LoginHeader;
