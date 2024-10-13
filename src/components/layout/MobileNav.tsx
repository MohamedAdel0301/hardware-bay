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
import { Button } from "../ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useMobileNav from "@/hooks/useMobileNav";

const MobileNav = () => {
  const router = useRouter();
  const { status } = useSession();
  const { isOpen, setIsOpen } = useMobileNav();
  return (
    <>
      <Logo className="max-w-44" />
      <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger>
          <Menu />
        </DrawerTrigger>
        <DrawerContent
          aria-describedby={undefined}
          className="left-auto right-0 top-0 mt-0 h-screen w-[300px] rounded-none border-gray-800 bg-gray-900"
          showbar={false}
        >
          <DrawerHeader>
            <DrawerTitle>Navigation</DrawerTitle>
          </DrawerHeader>
          <MobileNavBody />
          <DrawerFooter>
            <DrawerClose>
              <X className="mx-auto my-4 text-red-700" />
            </DrawerClose>
            {status === "authenticated" && (
              <Button
                onClick={async () => {
                  signOut();
                  setIsOpen(() => false);
                  router.refresh();
                }}
                type="button"
                className="bg-red-600 focus:bg-red-700 active:bg-red-700"
              >
                Logout
              </Button>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNav;
