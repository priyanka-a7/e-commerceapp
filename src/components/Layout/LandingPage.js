import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Welcome to Our E-commerce App
      </h1>
      <p className="text-gray-700 mb-6 text-center">
        If you already have an account, please log in. If not, you can register.
      </p>
      <div className="space-y-4">
        <Link to="/login">
          <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="w-full mt-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
            Register
          </button>
        </Link>
      </div>
    </div>
  </div>
  
  );
};

export default LandingPage;