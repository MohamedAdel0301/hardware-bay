import React from "react";
import Logo from "../misc/Logo";
import CategoriesBtn from "./CategoriesBtn";
import Link from "next/link";
import AuthSection from "./AuthSection";

const Navbar = () => {
  return (
    <header className="mb-8 flex min-w-full items-center justify-between rounded-b-sm border-b-2 border-b-slate-100/10 pb-4 pt-8 font-worksans">
      <section className="flex items-center gap-8">
        <Logo className="max-w-44" />
        <nav className="flex gap-8 text-2xl">
          <CategoriesBtn />
          <Link href={"/"} className="link-underline">
            About
          </Link>
          <Link href={"/"} className="link-underline">
            Contact Us
          </Link>
        </nav>
      </section>
      <AuthSection />
    </header>
  );
};

export default Navbar;
