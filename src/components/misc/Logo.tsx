import Image from "next/image";
import DarkLogo from "@/../public/logo-dark.png";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return <Image src={DarkLogo} alt="logo-dark" className={cn("", className)} />;
};

export default Logo;
