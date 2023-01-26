import './Dashboard.css'
import React from 'react'
import Sidenav from '../../../components/user/Dashboard/Sidenav/Sidenav'
import Header from '../../../components/user/Dashboard/Header/Header'
import TodoContainer from '../../../components/user/Dashboard/TodoContainer/TodoContainer'

function Dashboard() {
  return (
    <div className="dashboardWrapper">
      <Sidenav />
      <div className='dashboardTodosWrapper'>
        <Header />
        <TodoContainer />

      </div>
    </div>
  )
}

export default Dashboard