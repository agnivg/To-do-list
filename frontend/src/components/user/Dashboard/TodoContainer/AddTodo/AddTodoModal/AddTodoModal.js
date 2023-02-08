import styles from "./AddTodoModal.module.css";
import { AiOutlineCloseSquare } from "react-icons/ai";
export default function AddTodoModal({ setopenTodoModal }) {
  return (
    <div className={styles.addtodomodalBackgroundMask}>
      <form className={styles.addtodomodalForm}>
        <input type="text" placeholder="Name of the new task" />
        <input type="date" placeholder="End Date" />
        <select name="" id="">
          <option value="">select</option>
          <option value="">PERSONAL</option>
          <option value="">PROFESSIONAL</option>
          <option value="">TEAM</option>
        </select>
        <input type="text" placeholder="description" />
        <button className={styles.button}>ADD TODO</button>
        <AiOutlineCloseSquare
          className={styles.closeButton}
          onClick={() => setopenTodoModal(false)}
        />
      </form>
    </div>
  );
}
