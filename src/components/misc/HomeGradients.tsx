"use client";
import HomeGradient from "@/../public/home-gradient.svg";
import HomeIntersect from "@/../public/home-intersect.svg";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
const HomeGradients = ({ className }: { className?: string }) => {
  const pathName = usePathname();

  if (pathName !== "/") return null;
  return (
    <div className={cn("absolute inset-0 overflow-x-hidden", className)}>
      <HomeGradient className="absolute -z-50" />
      <HomeIntersect className="absolute -z-40" />
    </div>
  );
};

export default HomeGradients;
