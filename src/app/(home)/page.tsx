import { heroSubtext, heroText } from "@/components/layout";
import HeroImage from "@/components/misc/HeroImage";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-24 flex justify-between">
      <section className="font-worksans mt-8 flex max-w-2xl flex-col gap-y-8">
        <h1 className="font-playfair text-5xl font-semibold">{heroText}</h1>
        <p className="text-2xl">{heroSubtext}</p>
        <Link
          href="/auth/signup"
          className="bg-btnGradient self-start rounded-md px-4 py-2 text-xl font-semibold text-black"
        >
          Get Started
        </Link>
      </section>
      <HeroImage />
    </main>
  );
}
