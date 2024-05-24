import React, { createContext, useState, useContext } from "react";

import Cookies from "js-cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const expirationTimeInHours = 4;
  const expirationDate = new Date(
    new Date().getTime() + expirationTimeInHours * 60 * 60 * 1000
  );

  const verifyAuth = () => {
    if (user) {
      return true;
    }
    const storedUser = Cookies.get("user");
    if (!storedUser) {
      return false;
    }
    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);
    return storedUser ? true : false;
  };

  const addUser = (userData) => {
    const user = JSON.stringify(userData);
    Cookies.set("user", user, { expires: expirationDate });
    setUser(userData);
  };

  const logout = () => {
    Cookies.remove("user");
    setUser(null);
  };

  const contextValue = {
    user,
    addUser,
    logout,
    verifyAuth,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuthContext };
