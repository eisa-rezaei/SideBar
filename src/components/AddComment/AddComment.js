import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./AddComment.css";
//formik constants
const initialValues = {
  name: "",
  email: "",
  comment: "",
};
const onSubmit = (values) => {
  console.log("from data : ", values);
};
const validationSchema = Yup.object({
  name: Yup.string().required("This feild is Required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("This feild is Required"),
  comment: Yup.string()
    .required("there is no comment here ")
    .max(200, "max words has been used !"),
});
//using formik
const AddComment = () => {
  const formik = useFormik({ initialValues, onSubmit, validationSchema });
  const [toggleForm, setToggleForm] = useState(false);
  return (
    <div className="container">
      <header className="comment-form-toggle-head">
        <h3>add comment</h3>
        <button
          type="button"
          onClick={() => setToggleForm(!toggleForm)}
          className={toggleForm ? "tg-btn" : `tg-btn toggled`}
        >
          {toggleForm ? `close` : `add`}
        </button>
      </header>
      {toggleForm && (
        <form className="comment-form" onSubmit={formik.handleSubmit}>
          <div className="comment-form-control">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              focus
              {...formik.getFieldProps("name")}
            />
            {formik.errors.name ? <p>{formik.errors.name}</p> : null}
          </div>
          <div className="comment-form-control">
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
          <div className="comment-form-control">
            <label htmlFor="comment">comment:</label>
            <input
              type="text"
              id="comment"
              name="comment"
              placeholder="comment"
              {...formik.getFieldProps("comment")}
            />
            {formik.touched.comment && formik.errors.comment ? (
              <p>{formik.errors.comment}</p>
            ) : null}
          </div>
          <button type="submit" className="comment-btn">
            add comment
          </button>
        </form>
      )}
    </div>
  );
};

export default AddComment;
