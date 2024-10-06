"use client";
import React, { Suspense, useEffect, useState } from "react";
import Logo from "../misc/Logo";
import CategoriesBtn from "./CategoriesBtn";
import Link from "next/link";
import AuthSection from "./AuthSection";
import SearchBar from "./SearchBar";
import SearchBarFallback from "./SearchBarFallback";
import MobileNav from "./MobileNav";
import { useMediaQuery } from "usehooks-ts";

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  //defer rendering to a temporary component until window is available for media query
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return (
      <header className="mb-8 flex min-w-full items-center justify-between rounded-b-sm border-b-2 border-b-slate-100/10 pb-4 pt-8 font-worksans">
        <section className="flex items-center gap-8">
          <Logo className="max-w-44" />
        </section>
      </header>
    );
  }

  if (isDesktop) {
    return (
      <header className="mb-8 flex min-w-full items-center justify-between rounded-b-sm border-b-2 border-b-slate-100/10 pb-4 pt-8 font-worksans">
        <section className="flex items-center gap-8">
          <Logo className="max-w-44" />
          <nav className="flex gap-8 text-2xl">
            <CategoriesBtn className="hidden md:flex" />
            <div className="hidden gap-8 lg:flex">
              <Link href={"/"} className="link-underline">
                About
              </Link>
              <Link href={"/"} className="link-underline">
                Contact Us
              </Link>
            </div>
          </nav>
          <Suspense fallback={<SearchBarFallback />}>
            <SearchBar className="hidden md:flex" />
          </Suspense>
        </section>
        <AuthSection className="hidden md:block" />
      </header>
    );
  }
  return <MobileNav />;
};

export default Navbar;
