import { GlobalDataContext } from "@/contexts/GlobalDataProvider";
import { useContext } from "react";

const useGlobalData = () => {
  const context = useContext(GlobalDataContext);
  if (!context) {
    throw new Error("GlobalData context used outside boundry");
  }
  return context;
};

export default useGlobalData;
