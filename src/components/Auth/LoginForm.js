import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (
          storedUser &&
          storedUser.email === values.email &&
          storedUser.password === values.password
        ) {
          // login(values.email);
          alert("Login Successful!");
          navigate("/products");
        } else {
          alert("Invalid credentials");
        }
      }}
    >
<Form className="space-y-6">
  <div>
    <Field
      name="email"
      placeholder="Email"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <ErrorMessage
      name="email"
      component="div"
      className="text-black-500 text-sm mt-1"
    />
  </div>
  <div>
    <Field
      name="password"
      type="password"
      placeholder="Password"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <ErrorMessage
      name="password"
      component="div"
      className="text-black-500 text-sm mt-1"
    />
  </div>
  <button
    type="submit"
    className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
  >
    Login
  </button>
</Form>
</Formik>
  );
};

export default LoginForm;