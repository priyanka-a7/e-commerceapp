import React from "react";
import LoginForm from "../components/Auth/LoginForm";

const Login = () => {
  return (
    <div className="login-page flex items-center justify-center min-h-screen bg-gray-100 px-4">
  <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
    <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
    <LoginForm />
  </div>
</div>

  );
};

export default Login;