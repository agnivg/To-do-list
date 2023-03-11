import React from 'react'
import MyDetails from '../MyDetails/MyDetails';
import Security from '../Security/Security';
import { useState } from 'react';
import "./switch.css"

function Switchcpmponents() {

const [isMyDetails, setMyDetails] = useState(true);
   return (
   <>
    <p  className={isMyDetails ?'my-details-1':'my-details-2'} onClick={()=>setMyDetails(true)}>My Details</p>
        <p className={isMyDetails ?'security-1':'security-2'} onClick={()=>setMyDetails(false)}>Security</p>
        <p className='activity'>Activity</p>
        <p className='badges'>Badges</p>
        <hr className='light-line'></hr>
        <hr className={isMyDetails?'dark-line-1':'dark-line-2'}></hr>
    
    {isMyDetails?<MyDetails/>:<Security/>}
  
   </>
   )
}

export default Switchcpmponents
