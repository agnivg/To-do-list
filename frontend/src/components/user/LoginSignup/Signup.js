import React from 'react'
import styles from './Login.module.css'
function Signup() {
  return (
    <form className={styles.Form}>
      <div>
        <label htmlFor="">USERNAME</label>
        <input type="text" name="" id="" />
      </div>
      <div>
      <label htmlFor="">Email</label>
        <input type="text" name="" id="" />
      </div>
      <div>
      <label htmlFor="">Passowrd</label>
        <input type="text" name="" id="" />
      </div><div>
      <label htmlFor="">Confirm Password</label>
        <input type="text" name="" id="" />
      </div>
      <input type="submit" value="SIGN UP"/>
    </form>
  )
}

export default Signup