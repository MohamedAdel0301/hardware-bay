import React from "react";
import Logo from "../misc/Logo";
import CategoriesBtn from "./CategoriesBtn";
import AuthBtn from "./AuthBtn";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="font-worksans my-8 flex min-w-full items-center justify-between">
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

      <section className="flex gap-4 text-2xl">
        <AuthBtn
          href={"/auth/login"}
          className="rounded-md border-2 border-white px-2 py-1"
        >
          Login
        </AuthBtn>
        <AuthBtn
          href={"/auth/signup"}
          className="bg-btnGradient rounded-md px-2 py-1 font-medium text-black"
        >
          Sign up
        </AuthBtn>
      </section>
    </header>
  );
};

export default Navbar;
