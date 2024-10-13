import React, { Suspense } from "react";
import Logo from "../misc/Logo";
import CategoriesBtn from "./CategoriesBtn";
import Link from "next/link";
import AuthSection from "./AuthSection";
import SearchBar from "./SearchBar";
import SearchBarFallback from "./SearchBarFallback";
import MobileNav from "./MobileNav";
import MobileNavProvider from "@/contexts/MobileNavProvider";

const Navbar = () => {
  return (
    <>
      <header className="mb-8 flex min-w-full items-center justify-between rounded-b-sm border-b-2 border-b-slate-100/10 pb-4 pt-8 font-worksans max-md:hidden">
        <section className="flex items-center gap-8">
          <Logo className="max-w-44" />
          <nav className="flex gap-8 text-2xl">
            <CategoriesBtn />
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
            <SearchBar />
          </Suspense>
        </section>
        <AuthSection />
      </header>
      <header className="mb-8 flex min-w-full items-center justify-between rounded-b-sm border-b-2 border-b-slate-100/10 pb-4 pt-8 font-worksans md:hidden">
        <MobileNavProvider>
          <MobileNav />
        </MobileNavProvider>
      </header>
    </>
  );
};

export default Navbar;
