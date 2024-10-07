import React, { createContext, useState } from "react";

type TMobileNavData = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type TMobileNavProvider = {
  children: React.ReactNode;
};

export const MobileNavContext = createContext<TMobileNavData | null>(null);

const MobileNavProvider = ({ children }: TMobileNavProvider) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <MobileNavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileNavContext.Provider>
  );
};

export default MobileNavProvider;
