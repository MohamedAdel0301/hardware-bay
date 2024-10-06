import Link from "next/link";
import { heroText, heroSubtext } from "../layout/data";
import HeroImage from "../misc/HeroImage";

const Hero = () => {
  return (
    <section className="flex justify-between">
      <section className="mt-8 flex max-w-2xl flex-col gap-y-8 font-worksans">
        <h1 className="font-playfair text-5xl font-semibold">{heroText}</h1>
        <p className="text-2xl">{heroSubtext}</p>
        <Link
          href="/auth/signup"
          className="self-center rounded-md bg-btnGradient px-4 py-2 text-xl font-semibold text-black transition-all hover:scale-105 active:scale-95 sm:self-start"
        >
          Get Started
        </Link>
      </section>
      <HeroImage className="hidden sm:block" />
    </section>
  );
};

export default Hero;
