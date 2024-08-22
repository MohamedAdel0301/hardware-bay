"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const CategoriesBtn = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
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
      <DropdownMenuContent className="w-56 text-base">
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoriesBtn;
