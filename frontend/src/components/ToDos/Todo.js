import React from 'react';

import {  RiDeleteBin6Line } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { TbCheck } from "react-icons/tb";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  


  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div >
        <h1>{todo.text}</h1>
        {todo.desc}
      </div>
      <div className='icons'>
        <TbCheck title='Complete' className='tick-icon' key={todo.id} onClick={() => completeTodo(todo.id)}/>
        <RiDeleteBin6Line title='Delete'
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit  title='Edit' className='edit-icon'
        />
       
      </div>
    </div>
  ));
};

export default Todo;