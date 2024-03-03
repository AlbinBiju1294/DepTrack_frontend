import React, { useState, createContext, ReactNode } from "react";

type User = {
  id:number,
  username:string,
  role:number,
  email?:string,
  du_id:number
};

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const initialUserContext: UserContextType = {
  user: null,
  setUser: () => null,
};

const UserContext = createContext<UserContextType>(initialUserContext);

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const storedUser = localStorage.getItem('user')
  const [user, setUser] = useState<User | null>(storedUser ? JSON.parse(storedUser) : null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
