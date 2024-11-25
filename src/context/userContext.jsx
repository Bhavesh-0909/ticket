'use client';
import React, { createContext, useRef, useEffect, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  
  const userData = useRef({
    walletAddress: "",
    displayName: "",
  });

  useEffect(() => {
    
    const sessionData = JSON.parse(sessionStorage.getItem("userData"));
    if (sessionData) {
      userData.current = {
        walletAddress: sessionData.walletAddress || "",
        displayName: sessionData.displayName || "",
      };
    }
  }, []);

  // Function to update user data and sessionStorage
  const setUserData = (data) => {
    userData.current = { ...userData.current, ...data };
    sessionStorage.setItem("userData", JSON.stringify(userData.current));
  };

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
}
