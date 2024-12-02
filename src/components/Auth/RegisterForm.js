import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password too short").required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        localStorage.setItem("user", JSON.stringify(values));
        alert("Registration successful!");
        navigate("/login");
      }}
    >
     <Form className="space-y-6">
  <div>
    <Field
      name="name"
      placeholder="Name"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
    />
    <ErrorMessage
      name="name"
      component="div"
      className="text-black-500 text-sm mt-1"
    />
  </div>
  <div>
    <Field
      name="email"
      placeholder="Email"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
    />
    <ErrorMessage
      name="email"
      component="div"
      className="text-clack-500 text-sm mt-1"
    />
  </div>
  <div>
    <Field
      name="password"
      type="password"
      placeholder="Password"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
    />
    <ErrorMessage
      name="password"
      component="div"
      className="text-black-500 text-sm mt-1"
    />
  </div>
  <button
    type="submit"
    className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
  >
    Register
  </button>
</Form>

    </Formik>
  );
};

export default RegisterForm;