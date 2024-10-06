"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import CategoriesMenu from "./CategoriesMenu";
import { cn } from "@/lib/utils";

const CategoriesBtn = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={true}>
      <DropdownMenuTrigger
        className={cn("border-none outline-none", className)}
      >
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
