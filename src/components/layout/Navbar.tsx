import React from "react";
import Logo from "../misc/Logo";
import CategoriesBtn from "./CategoriesBtn";
import Link from "next/link";
import AuthSection from "./AuthSection";

const Navbar = () => {
  return (
    <header className="mb-8 flex min-w-full items-center justify-between pt-8 font-worksans">
      <Logo className="max-w-44" />

      <nav className="flex gap-8 text-2xl">
        <CategoriesBtn />
        <Link href={"/about"} className="link-underline">
          About
        </Link>
        <Link href={"/contact"} className="link-underline">
          Contact Us
        </Link>
      </nav>
      <AuthSection />
    </header>
  );
};

export default Navbar;
