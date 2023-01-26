import styles from "./AddTodo.module.css";
export default function AddTodo() {
  return (
    <div className={styles.addTodoWrapper}>
      <form action="">
        <input type="text" placeholder="What is your new Task ?"/>
        <button className={styles.button}>ADD TODO</button>
      </form>
    </div>
  );
}
