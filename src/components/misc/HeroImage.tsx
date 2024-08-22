import Image from "next/image";
import DarkHero from "@/../public/hero-image.png";
import { cn } from "@/lib/utils";

const HeroImage = ({ className }: { className?: string }) => {
  return <Image src={DarkHero} alt="logo-dark" className={cn("", className)} />;
};

export default HeroImage;
