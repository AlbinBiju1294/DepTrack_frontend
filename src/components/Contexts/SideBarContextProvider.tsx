import React, { useState, createContext, ReactNode } from "react";

type sideBarContextType = {
  activeDiv: number;
  setActiveDiv: React.Dispatch<React.SetStateAction<number>>;
};

type sideBarProviderProps = {
  children: ReactNode;
};

const initialSidebarContext: sideBarContextType = {
  activeDiv: 0,
  setActiveDiv: () => null,
};


const sideBarContext = createContext<sideBarContextType>(initialSidebarContext);

export const SideBarContextProvider = ({ children }: sideBarProviderProps) => {
  const [activeDiv, setActiveDiv] = useState<number>(1);
  return (
    <sideBarContext.Provider value={{ activeDiv, setActiveDiv }}>
      {children}
    </sideBarContext.Provider>
  );
};

export default sideBarContext;
