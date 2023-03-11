import React from 'react';
import "./file.css"
import { useDispatch } from "react-redux";
import { checkUser, logout } from "../../app/authSlice";
import Switchcpmponents from '../switchcomponents/switchcomponents';
import todoTick from "../../assets/todoTick.svg";

function Afterlogin() {
  const dispatch = useDispatch();
  const [user, setUser] = React.useState({});
  dispatch(checkUser()).then((res) => setUser(res.payload));
  return (
    <>
  <div className='container'>
<div className='rectangle5'>
      <div className="todo-list"><span>Todo List</span></div>
      <img src={todoTick} className="todo-pic" alt="todoLogo" />
       <div className='dashboard'>Dashboard</div>
       <div className='dashboard-picture'></div>
       <div className='create-task'>Create Task</div>
       <div className='create-task-picture'></div>
       <div className='store'>Store</div>
       <div className="store-picture">{`Store `}</div>
       <div className='profile-background'></div>
       <div className='profile'>Profile</div>
       <div className='profile-image'></div>
       <hr className='line1'></hr>
       <div className='logout' onClick={() => dispatch(logout())}>Log Out</div>
       <div className='logout-picture' onClick={() => dispatch(logout())}></div>
      </div>



      <div className='profile-details'>
      
     <div className='top-container'>
      <div className="top-images">
      <div className="ellipse-6" />
      <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADlSURBVHgBnVPLFYJADBz14hFv3kwJlLBHj5ZiCZSAFWgHlkAJevQGHagVYCLZB+xjw2feG5ZHZpNhkwVsELNgPvR9MXJmrcyxAKRO6oAFZjgT4VuZMZ3Su5Pv6ZREpZKMIhJPrCSpVj0bmkw1PVfrQJR0XMVQ6XqwEvkqX8Tx1HVnJaJAbDkyD1zaa/2WR2npCM0hXjEOPwpuKHjTIGEcLlY0xXQ3HkXoimAPYQyi9TeAVp0EFdqOzEn237vhhyTbM7doBtJTBC/msbMhCXSCD/NiVXPMO5omiP2pjRjECe1sWfcPP3aGPUnPdJb6AAAAAElFTkSuQmCC' className="ellipse-6-image" alt="tod0" />
      <div className="ellipse-5" />
      <div className='ellipse-5-image'>30</div>
      <div className='last-image-of-1st-rectangle'/>
      </div>
      </div>


      <div className='bottom-container'>
      
       <div className='profile-picture-box'></div> 
       <div className='profile-name'>John Doe</div>
      <div className='profile-email'>{user?.user?.email}</div>
      </div>
     
      </div>
    
    </div>
    <Switchcpmponents/>
    </>
  )
}

export default Afterlogin
