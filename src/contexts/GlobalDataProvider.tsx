"use client";
import { Category } from "@/data";
import { createContext } from "react";

type TGlobalData = {
  categories: Category[];
};

type TGlobalDataProvider = {
  categories: Category[];
  children: React.ReactNode;
};

export const GlobalDataContext = createContext<TGlobalData | null>(null);

const GlobalDataProvider = ({ categories, children }: TGlobalDataProvider) => {
  return (
    <GlobalDataContext.Provider value={{ categories }}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataProvider;
