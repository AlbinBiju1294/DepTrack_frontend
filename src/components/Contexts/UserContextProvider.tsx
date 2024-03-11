import React, { useState, createContext, ReactNode } from "react";

type User = {
  id: number;
  username: string;
  role: number;
  email?: string;
  du_id: number;
};

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  activeDiv: number;
  setActiveDiv: React.Dispatch<React.SetStateAction<number>>;
};

const initialUserContext: UserContextType = {
  user: null,
  setUser: () => null,
  activeDiv: 0,
  setActiveDiv: () => null,
};

const UserContext = createContext<UserContextType>(initialUserContext);

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const storedUser = localStorage.getItem("user");
  const [user, setUser] = useState<User | null>(
    storedUser ? JSON.parse(storedUser) : null
  );
  const [activeDiv, setActiveDiv] = useState<number>(1);
  return (
    <UserContext.Provider value={{ user, setUser, activeDiv, setActiveDiv }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
