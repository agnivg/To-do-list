import AddTodo from "./AddTodo/AddTodo";
import styles from "./TodoContainer.module.css";
import TodoSingle from "./TodoSingle/TodoSingle";
export default function TodoContainer() {
  return (
    <div className={styles.todoContainerWrapper}>
      <AddTodo />
      <div>
        <TodoSingle />
        <TodoSingle />
        <TodoSingle />
        <TodoSingle />
        <TodoSingle />
        <TodoSingle />
        <TodoSingle />
        <TodoSingle />
        <TodoSingle />
        <TodoSingle />
        <TodoSingle />
        <TodoSingle />
        <TodoSingle />
        <TodoSingle />
        <TodoSingle />
      </div>
    </div>
  );
}
