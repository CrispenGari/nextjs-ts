import styles from "./Question.module.css";
import { useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
const Question = ({ question }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.question}>
      <div className={styles.question__header}>
        <h4>{question?.question}</h4>
        {!open ? (
          <IoMdAdd
            onClick={() => {
              setOpen(!false);
            }}
            className={styles.question__header__icon}
          />
        ) : (
          <IoMdClose
            onClick={() => {
              setOpen(false);
            }}
            className={styles.question__header__icon}
          />
        )}
      </div>
      {open && (
        <div className={styles.question__body}>
          {question?.answers?.map((answer, index) => (
            <p key={index}>{answer}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Question;
