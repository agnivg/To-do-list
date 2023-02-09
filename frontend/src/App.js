import React from 'react'
import LoginSignup from './pages/user/LoginSignup/LoginSignup';
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {
  console.log('App component is rendered')
  return (
    <>
      <div className="App">
      <Navbar/>
      <LoginSignup />
      </div>  
    </>
  )
}


export default App;
