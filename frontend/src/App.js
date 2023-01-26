import React from 'react'
import LoginSignup from './pages/user/LoginSignup/LoginSignup';
import Navbar from './components/Navbar/Navbar'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Dashboard from './pages/user/Dashboard/Dashboard'

function App() {
  console.log('App component is rendered')
  return (
    <>
      <div className="App">
      <Navbar/>
      <LoginSignup />
      <Dashboard />
      </div>  
    </>
  )
}


export default App;
