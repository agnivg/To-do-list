import React from 'react';
import './ToDos.css';


function ToDos() {
 return (
  <div>
    <h2>To Do List</h2>
    <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" >
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          name="text"
          autoComplete="off"
        />
        <button type="submit">
          Add
        </button>
      </form>
      <div >
        <button type="button"  aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
  </div>
 );
}

export default ToDos;