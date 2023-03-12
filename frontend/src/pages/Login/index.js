import React from "react";
import { Formik } from "formik";
import "./Login.css";
import todoTick from "../../assets/todoTick.svg";
import { Link } from "react-router-dom";
import trophy from "../../assets/trophy.svg";

import { useDispatch } from "react-redux";

import { login } from "../../app/authSlice";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validateSchema = Yup.object({
    username: Yup.string()
      .min(3, "Must be 3 characters or more")
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    password: Yup.string()
      .min(5, "Must be 8 characters or more")
      .max(20, "Must be 20 characters or less")
      .required("Required"),
  });


  return (
    <div className="login-container">
      <div className="login-left-container">
        <div className="login-logo">
          <img src={todoTick} alt="todoLogo" />
          <h3>Todo List</h3>
        </div>
        <div className="preview-section">
          <div className="points-tile-card">
            <h4>Points on every completed task</h4>
            <img src={trophy} alt="trophy" />
            <p>Points</p>
            <h3>150,234</h3>
          </div>
          <div className="preview-todo-card">
            <p>Drink Water</p>
            <button>Private</button>
          </div>

          <div></div>
        </div>
      </div>
      <div className="login-right-container">
        <div className="login-logo-mobile">
          <img src={todoTick} alt="todoLogo" />
          <h3>Todo List</h3>
        </div>
        <div className="login-form">
          <div className="login-welcome-text">
            <h1>Welcome Back!</h1>
            <p>
              Start Managing Your Day Effiectively and increase productivity
            </p>
          </div>
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={validateSchema}
            onSubmit={(values) => {
              dispatch(login(values))
                .unwrap()
                .then(() => navigate("/"));
            }}
          >
            {(formik) => (
              <form
                className="login-form-container"
                onSubmit={formik.handleSubmit}
              >
                <div className="email-input">
                  <label htmlFor="email">UserName</label>&nbsp;&nbsp;
                  <input
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    placeholder="Enter your username"
                  />
                  {formik.errors.username && formik.touched.username ? <div className="error">{formik.errors.username}</div> : null}
                </div>
                <div className="password-input">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="Enter your password"
                  />
                  {formik.errors.password && formik.touched.password ? <div className="error">{formik.errors.password}</div> : null}
                </div>
                <div className="submit-btn">
                  <button type="submit">Login</button>
                </div>
                <div className="signup-link">
                  <p>
                    Don't have an account? &nbsp;
                    <Link to="/dashboard">Sign Up</Link>
                  </p>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
