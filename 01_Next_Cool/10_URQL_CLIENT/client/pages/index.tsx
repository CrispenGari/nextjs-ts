import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { useQuery } from "urql";
import Todo from "../components/Todo";
import { useState } from "react";
import Modal from "../components/Modal";

const TodosListQuery = `
{
  todos{
    id
    completed
    title
  }
}
`;
const Home: NextPage = ({}) => {
  const [result, reexecuteQuery] = useQuery({
    query: TodosListQuery,
  });

  const [create, setCreate] = useState(false);
  return (
    <div className={styles.app}>
      {create && (
        <Modal reexecuteQuery={reexecuteQuery} setCreate={setCreate} />
      )}

      <div className={styles.app__main}>
        <div className={styles.app__main__header}>
          <h1>Todos</h1>
          <form>
            <input type="text" placeholder="filter buy id" />
          </form>
          <button onClick={() => setCreate(true)}>Create New</button>
        </div>
        <div className={styles.app__main__list}>
          {result.data?.todos?.map((todo) => (
            <Todo reexecuteQuery={reexecuteQuery} key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
