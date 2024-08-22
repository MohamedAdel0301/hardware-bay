import React from "react";
import Logo from "../misc/Logo";
import CategoriesBtn from "./CategoriesBtn";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="my-8 flex min-w-full items-center justify-between">
      <Logo className="max-w-44" />
      <nav>
        <div className="flex gap-8 text-2xl">
          <CategoriesBtn />
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact Us</Link>
        </div>
      </nav>
      <div className="flex gap-4 text-2xl">
        <Link href={"/about"}>Login</Link>
        <Link href={"/about"}>Sign up</Link>
      </div>
    </header>
  );
};

export default Navbar;
