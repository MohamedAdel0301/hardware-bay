"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import CategoriesMenu from "./CategoriesMenu";

const CategoriesBtn = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={true}>
      <DropdownMenuTrigger className="border-none outline-none">
        <div className="flex">
          Categories
          {isOpen ? (
            <MdKeyboardArrowDown className="self-end" />
          ) : (
            <MdKeyboardArrowRight className="self-end" />
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-none bg-neutral-950/95 p-4 text-base shadow-sm shadow-white">
        <CategoriesMenu />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoriesBtn;
