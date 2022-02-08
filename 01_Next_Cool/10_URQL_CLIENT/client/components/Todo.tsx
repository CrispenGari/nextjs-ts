import React from "react";
import { useMutation } from "urql";
import { client } from "../providers/UrqlProvider";

import styles from "./Todo.module.css";

const UPDATE_TODO = `
mutation UpdateTodo($id: Int!){
    updateTodo(id:$id){
      id
      completed
    }
  }
`;

const DELETE_TODO_MUTATION = `
mutation DeleteTodo($id:Int!){
    deleteTodo(id:$id)
}
`;
const Todo: React.FC<{
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
  reexecuteQuery?: any;
}> = ({ todo: { id, title, completed }, reexecuteQuery }) => {
  const [res, update] = useMutation(UPDATE_TODO);
  const [_res, deleteT] = useMutation(DELETE_TODO_MUTATION);

  const updateTodo = async () => {
    await update({
      id,
    });
    await reexecuteQuery({ requestPolicy: "network-only" });
  };

  const deleteTodo = async () => {
    await deleteT({
      id,
    });
    await reexecuteQuery({ requestPolicy: "network-only" });
  };
  return (
    <div className={styles.todo}>
      <div>
        <h1 className={completed ? styles.todo__done : ""}>{title}</h1>
        <p>{completed ? "Done" : "Pending"}</p>
      </div>

      <p>
        <button onClick={updateTodo} disabled={completed}>
          DONE
        </button>
        <button onClick={deleteTodo}>DELETE</button>
      </p>
    </div>
  );
};

export default Todo;
