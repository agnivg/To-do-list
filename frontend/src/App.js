import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LoginSignup from './pages/user/LoginSignup/LoginSignup';
import './App.css'

function App() {
  console.log('App component is rendered')
  return (
    <>
      <div className="App">
      <Navbar/>
      </div>
    </>
  )
}


export default App;
