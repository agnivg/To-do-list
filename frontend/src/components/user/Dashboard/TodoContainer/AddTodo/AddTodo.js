import { useState } from "react";
import styles from "./AddTodo.module.css";
import AddTodoModal from "./AddTodoModal/AddTodoModal";
export default function AddTodo() {
  const [opentodoModal, setopenTodoModal] = useState(false);
  return (
    <div className={styles.addTodoWrapper}>
      {opentodoModal && <AddTodoModal  setopenTodoModal={setopenTodoModal}/>}
      <button className={styles.button} onClick={() => setopenTodoModal(true)}>
        ADD TODO
      </button>
    </div>
  );
}
