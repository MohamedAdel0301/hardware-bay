import { MobileNavContext } from "./../contexts/MobileNavProvider";
import { useContext } from "react";

const useMobileNav = () => {
  const context = useContext(MobileNavContext);
  if (!context) {
    throw new Error("GlobalData context used outside boundry");
  }
  return context;
};

export default useMobileNav;
