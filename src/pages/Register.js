import React from "react";
import RegisterForm from "../components/Auth/RegisterForm";

const Register = () => {
  return (
    <div className="register-page flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Register
      </h1>
      <RegisterForm />
    </div>
  </div>
  
  );
};

export default Register;