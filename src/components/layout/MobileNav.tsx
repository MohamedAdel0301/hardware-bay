"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Logo from "../misc/Logo";
import { Menu, X } from "lucide-react";
import MobileNavBody from "./MobileNavBody";

const MobileNav = () => {
  return (
    <header className="mb-8 flex min-w-full items-center justify-between rounded-b-sm border-b-2 border-b-slate-100/10 pb-4 pt-8 font-worksans">
      <Logo className="max-w-44" />
      <Drawer direction="right">
        <DrawerTrigger>
          <Menu />
        </DrawerTrigger>
        <DrawerContent
          className="left-auto right-0 top-0 mt-0 h-screen w-[300px] rounded-none border-gray-800 bg-gray-900"
          showbar={false}
        >
          <DrawerHeader>
            <DrawerTitle>Navigation</DrawerTitle>
          </DrawerHeader>
          <MobileNavBody/>
          <DrawerFooter>
            <DrawerClose>
              <X className="mx-auto text-red-700" />
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default MobileNav;
