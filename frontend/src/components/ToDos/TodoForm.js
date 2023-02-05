import React, { useState, useEffect, useRef } from 'react';
import { FcPlus } from "react-icons/fc";

function TodoForm(props) {
  const [input1, setInput1] = useState(props.edit ? props.edit.value : '');
  const [input2, setInput2] = useState(props.edit ? props.edit.value : '');
  const [input3, setInput3] = useState(props.edit ? props.edit.value : '');
  const [input4, setInput4] = useState(props.edit ? props.edit.value : '');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange1 = e => {
    setInput1(e.target.value);
  };
  const handleChange2 = e => {
    setInput2(e.target.value);
  };
  const handleChange3 = e => {
    setInput3(e.target.value);
  };
  const handleChange4 = e => {
    setInput4(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsOpen(false)
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input1,
      desc:input2,
      type:input3,
      date:input4
    });
    setInput1('');
  };

  const styles = {
    modalContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: '#E0E0E0',
      padding: 20,
      border: '1px solid #888',
      width: '40%',
      height: '60%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };
  
  

  return (
    <form  className='todo-form'>
       <>
          <label
            placeholder='Add a todo'
            
            name='text'
            className='todo-input '
            ref={inputRef}
            onClick={()=>setIsOpen(true)
            }
          >Add a Todo 
          <FcPlus  className='todo-button '/></label>
          
          {isOpen && (
        <div style={styles.modalContainer}>
          <div style={styles.modalContent}>
            <h3>Title:</h3>
            <input type="text" onChange={handleChange1} required/>
            <h3>Description:</h3>
            <textarea onChange={handleChange2} required/>
            <h3 >Type:</h3>
            <select onChange={handleChange3} required>
              <option value="team">Team</option>
              <option value="personal">Personal</option>
              <option value="professional">Professional</option>
            </select>
            <h3>Due Date:</h3>
            <input type="date" onChange={handleChange4} required/>
            <button onClick={handleSubmit}>Add</button>
          </div>
        </div>
          )}
          </>
    </form>
  );
}

export default TodoForm;