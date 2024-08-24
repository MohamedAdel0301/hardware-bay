import Image from "next/image";
import DarkLogo from "@/../public/logo-dark.png";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <Image src={DarkLogo} alt="logo-dark" className={cn("", className)} />
    </Link>
  );
};

export default Logo;
