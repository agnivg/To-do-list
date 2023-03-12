import React from 'react'
import "./file1.css"
import { useFormik } from "formik";
import * as Yup from "yup";


const initialValues= {
  first:"",
  last:"",
  ph:"",
  email:"",
  city:"",
  state:"",
  country:"",
};


function MyDetails() {
  const validateSchema = Yup.object({
    first: Yup.string()
      .min(3, "Must be 3 characters or more")
      .max(15, "Must be 15 characters or less")
      .required("Please enter your first name"),
      last: Yup.string()
      .min(3, "Must be 3 characters or more")
      .max(15, "Must be 15 characters or less")
      .required("Please enter your last name"),
      email: Yup.string()
      .email()
      .required("Please enter your email"),
      ph: Yup.string()
      .min(9, "Must be 8 characters")
      .required("Please enter your phone number"),
      city: Yup.string()
      .min(3, "Must be 1 characters or more")
      .required("Please enter your city"),
      state: Yup.string()
      .min(3, "Must be 1 characters or more")
      .required("Please enter your state"),
      country: Yup.string()
      .min(3, "Must be 1 characters or more")
      .required("Please enter your country"),
  });



 const {values,action,errors,handleBlur,handleChange,handleSubmit}= useFormik({
    initialValues:initialValues,
    validationSchema:validateSchema,
    onSubmit:(values,action)=>{
      console.log(values);
      action.resetForm();
      
    },
 
  },
  );


  console.log(errors);

  return (
    <>
    <form className='container' onSubmit={handleSubmit}>
      <p className='details'>Details</p>
      <p className='below-details'>You can edit your details below</p>
      <p className='first-name'><span>First Name</span></p>
      <input name='first' value={values.first} onChange={handleChange} onBlur={handleBlur} type="text" className='first-name-text' placeholder='Enter your first name'></input>
      <p className='last-name' ><span>Last Name</span></p>
      <input name='last' onChange={handleChange} onBlur={handleBlur} value={values.last} type="text" className='last-name-text'placeholder='Enter your last name'></input>
      <p className='phone-number'><span>Phone Number</span></p>
      <input name='ph' onChange={handleChange} onBlur={handleBlur} value={values.ph} type="number" className='phone-number-text'placeholder='Enter your phone number'></input>
      <p className='email'><span>Email Address</span></p>
      <input name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} type="email" className='email-text'placeholder='Enter your email'></input>
      <p className='city'><span>City</span></p>
      <input name='city' onChange={handleChange} onBlur={handleBlur} value={values.city} type="text" className='city-text'placeholder='Enter your city'></input>
      <p className='state'><span>State</span></p>
      <input name='state' onChange={handleChange} onBlur={handleBlur} value={values.state} type="text" className='state-text'placeholder='Enter your state'></input>
      <p className='country'><span>Country</span></p>
      <input name='country' onChange={handleChange} onBlur={handleBlur} value={values.country} type="country" className='country-text'placeholder='Enter your country'></input>
      <button className='update-box' type='submit'>Update</button>
      <button className='clear-box' type='reset' >Clear</button>
    </form>
    </>
  )
}

export default MyDetails
