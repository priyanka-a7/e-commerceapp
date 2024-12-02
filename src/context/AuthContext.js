import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores logged-in user
  const [users, setUsers] = useState([]); // Simulates a user database

  // Register a new user
  const register = (email, password) => {
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      throw new Error("User already exists");
    }
    setUsers([...users, { email, password }]); // Add user to the "database"
    setUser({ email }); // Log in the user automatically after registration
  };

  // Log in an existing user
  const login = (email, password) => {
    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!existingUser) {
      throw new Error("Invalid email or password");
    }
    setUser({ email }); // Set logged-in user
  };

  // Log out the user
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};