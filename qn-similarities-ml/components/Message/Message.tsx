import { FC } from "react";
import styles from "./Message.module.css";

const Message: FC<any> = () => (
  <div className={styles.message}>
    <p>
      This web application is using machine leaning to identify if questions are
      duplicates or not.
    </p>
  </div>
);

export default Message;
