import useGlobalData from "@/hooks/useGlobalData";
import Link from "next/link";
import React, { useState } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "../ui/button";
import MobileNavAuth from "./MobileNavAuth";

const MobileNavBody = () => {
  const { categories } = useGlobalData();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="flex w-full min-w-full gap-8 px-2 text-2xl">
      <div className="mt-12 flex w-full flex-col items-center gap-4">
        <MobileNavAuth />
        <Link href={"/"} className="link-underline">
          About
        </Link>
        <Link href={"/"} className="link-underline">
          Contact Us
        </Link>
        <Link href={"/search"} className="link-underline">
          Search
        </Link>
        <ScrollArea
          className={`transition-all duration-300 ease-in-out ${isExpanded ? "h-72" : "h-12"} ${isExpanded ? "overflow-y-scroll" : "overflow-y-hidden"} scrollbar-gray-800 w-40 space-y-2 overflow-hidden rounded-md border scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-white scrollbar-thumb-rounded-full`}
          onBlur={() => setIsExpanded(false)}
        >
          <Button
            className="flex w-full min-w-full justify-center text-2xl"
            onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
          >
            Categories
          </Button>
          <div
            className={`flex w-full flex-col items-center gap-1 ${isExpanded ? "" : "hidden"}`}
          >
            {categories.map((category) => (
              <Link
                key={`cat-${category.slug}`}
                href={`/search?cat=${category.slug}`}
                className="text-lg"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </ScrollArea>
      </div>
    </nav>
  );
};

export default MobileNavBody;
