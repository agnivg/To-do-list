import React from "react";
import "./security.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  curr: "",
  new: "",
  confirm: "",
};

function Security() {
  const validateSchema = Yup.object({
    curr: Yup.string()
      .min(5, "Must be 8 characters or more")
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    new: Yup.string()
      .min(5, "Must be 8 characters or more")
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    confirm: Yup.string()
      .required()
      .oneOf([Yup.ref("new"), null], "password must match"),
  });

  const { values, action, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validateSchema,
      onSubmit: (values, action) => {
        console.log(values);

        action.resetForm();
      },
    });

  console.log(errors);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="password">Password</p>
        <p className="below-password">
          <span>
            Please Enter Your Current Password to Change Your Password
          </span>
        </p>
        <p className="current-password">
          <span>Current Password</span>
        </p>
        <input
          name="curr"
          value={values.curr}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          className="current-password-text"
          placeholder="Enter your current password"
        ></input>
        <p className="new-password">
          <span>New Password</span>
        </p>
        <input
          name="new"
          value={values.new}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          className="new-password-text"
          placeholder="Enter your new password"
        ></input>
        <p className="confirm">
          <span>Confirm</span>
        </p>
        <input
          name="confirm"
          value={values.confirm}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          className="confirm-text"
          placeholder="Confirm your password"
        ></input>
        <button className="update-box" type="submit">
          Update
        </button>
        <button className="clear-box" type="reset">
          Clear
        </button>
      </form>
    </>
  );
}

export default Security;
