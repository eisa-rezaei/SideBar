import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./LoginForm.css";
//formik constants
const LoginForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log("from data : ", values);
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("This feild is Required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("This feild is Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });
  //using formik
  const formik = useFormik({ initialValues, onSubmit, validationSchema });
  return (
    <>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            {...formik.getFieldProps("name")}
          />
          {formik.errors.name ? <p>{formik.errors.name}</p> : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="password">password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            {...formik.getFieldProps("password")}
            // onChange={formik.handleChange}
            // value={formik.values.password}
            // onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
          <h4 className="forgot-password">forgot password</h4>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginForm;
