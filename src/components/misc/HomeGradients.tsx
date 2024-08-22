"use client";
import HomeGradient from "@/../public/home-gradient.svg";
import HomeIntersect from "@/../public/home-intersect.svg";
import { usePathname } from "next/navigation";
const HomeGradients = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="absolute">
      {pathName == "/" ? (
        <>
          <HomeGradient className="absolute -z-50" />
          <HomeGradient className="absolute -z-50" />
          <HomeIntersect className="absolute -z-40" />
        </>
      ) : null}
    </div>
  );
};

export default HomeGradients;
