import React from "react";
import styles from "./Login.module.css";

function Login() {
  return (
    <form className={styles.Form}>
      <div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="text" name="" id="" />
        </div>
      </div>
      <input type="submit" value="LOGIN" />
    </form>
  );
}

export default Login;
