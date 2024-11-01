// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = (userData) => {
    setUser(userData); // This is where you would typically handle backend signup
    console.log('User signed up:', userData); // Debugging log
  };

  const login = (userData) => {
    setUser(userData); // Handle backend login here
    console.log('User logged in:', userData); // Debugging log
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
