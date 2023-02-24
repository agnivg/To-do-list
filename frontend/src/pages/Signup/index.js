import React from "react";
import { Formik } from "formik";
import "./signup.css";
import todoTick from "../../assets/todoTick.svg";
import { Link } from "react-router-dom";
import trophy from "../../assets/trophy.svg";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { signup } from "../../app/authSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateSchema = Yup.object({
    username: Yup.string()
      .min(3, "Must be 3 characters or more")
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Must be 8 characters or more")
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const submitHandler = async (values) => {
    dispatch(signup(values))
      .unwrap()
      .then(() => navigate("/login"));
  };
  return (
    <div className="signup-container">
      <div className="signup-left-container">
        <div className="signup-logo">
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
      <div className="signup-right-container">
        <div className="signup-logo-mobile">
          <img src={todoTick} alt="todoLogo" />
          <h3>Todo List</h3>
        </div>
        <div className="signup-form">
          <div className="signup-welcome-text">
            <h1>Welcome to Todo List</h1>
            <div>
              Start Managing Your Day Effiectively and increase productivity
            </div>
          </div>
          {/* formik with error handles */}
          <Formik
            initialValues={{
              username: "",
              password: "",
              email: "",
              confirm_password: "",
            }}
            validationSchema={validateSchema}
            onSubmit={submitHandler}
          >
            {(formik) => (
              <form
                onSubmit={formik.handleSubmit}
                className="signup-form-container"
              >
                <div className="form-input">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                  {formik.errors.username && formik.touched.username ? (
                    <div className="error">{formik.errors.username}</div>
                  ) : null}
                </div>
                <div className="form-input">
                  <label htmlFor="username">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="form-input">
                  <label htmlFor="username">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <div className="error">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="form-input">
                  <label htmlFor="username">Confirm Password</label>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    onChange={formik.handleChange}
                    value={formik.values.confirm_password}
                  />
                  {formik.errors.confirm_password &&
                  formik.touched.confirm_password ? (
                    <div className="error">
                      {formik.errors.confirm_password}
                    </div>
                  ) : null}
                </div>
                <div className="submit-btn">
                  <button type="submit">Sign Up</button>
                </div>
                <div className="signup-link">
                  <p>
                    Already have an account? &nbsp;
                    <Link to="/login">Login</Link>
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

export default Signup;
