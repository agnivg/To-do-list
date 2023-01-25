import React, { useState } from "react";
import Login from "../../../components/user/LoginSignup/Login";
import Signup from "../../../components/user/LoginSignup/Signup";
import "./LoginSignup.css";

function LoginSignup() {
  const [isLogin, setLogin] = useState(false);
  return (
    <div className="LoginSignupWrapper">
      <h1>TO-DO LIST</h1>
      <div className="loginSignupInnerWrapper">
        <div className="loginSignupNavigation">
          <span
            onClick={() => setLogin(true)}
            style={{
              boxShadow: `${
                isLogin ? "0 0px 1px 1px rgb(5, 197, 130,0.5)" : ""
              }`,
            }}
          >
            Login
          </span>
          <span
            onClick={() => setLogin(false)}
            style={{
              boxShadow: `${
                !isLogin ? "0 0px 1px 1px rgb(5, 197, 130,0.5)" : ""
              }`,
            }}
          >
            Sign Up
          </span>
        </div>
        <div>{isLogin ? <Login /> : <Signup />}</div>
      </div>
    </div>
  );
}

export default LoginSignup;
