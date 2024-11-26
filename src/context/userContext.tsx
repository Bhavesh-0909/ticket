'use client';
import React, { createContext, useRef, useEffect, useContext, ReactNode } from "react";

interface UserData {
  walletAddress: string;
  displayName: string;
}

interface UserContextType {
  userData: React.MutableRefObject<UserData>;
  setUserData: (data: Partial<UserData>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const userData = useRef<UserData>({
    walletAddress: "",
    displayName: "",
  });

  useEffect(() => {
    const sessionData = JSON.parse(sessionStorage.getItem("userData") || '{}');
    if (sessionData) {
      userData.current = {
        walletAddress: sessionData.walletAddress || "",
        displayName: sessionData.displayName || "",
      };
    }
  }, []);

  const setUserData = (data: Partial<UserData>) => {
    userData.current = { ...userData.current, ...data };
    sessionStorage.setItem("userData", JSON.stringify(userData.current));
  };

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
