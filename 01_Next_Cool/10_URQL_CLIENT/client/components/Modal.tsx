import React from "react";
import { useMutation } from "urql";

import styles from "./Modal.module.css";

const ADD_TODO_MUTATION = `
mutation AddTodo($title: String!){
    addTodo(title:$title){
     title
     completed
   }
 }
`;

const Modal: React.FC<{
  reexecuteQuery?: any;
  setCreate: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setCreate, reexecuteQuery }) => {
  const [title, setTitle] = React.useState("");
  const [_, create] = useMutation(ADD_TODO_MUTATION);
  const newTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await create({
      title,
    });
    await reexecuteQuery({ requestPolicy: "network-only" });
    await setTitle("");
    await setCreate(false);
  };
  return (
    <div className={styles.modal}>
      <form onSubmit={newTodo}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="type todo title..."
        />

        <p>
          <button type="submit">SAVE</button>
          <button onClick={() => setCreate(false)}>CANCEL</button>
        </p>
      </form>
    </div>
  );
};

export default Modal;
