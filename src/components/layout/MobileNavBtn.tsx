import React from "react";
import { Button } from "../ui/button";
import useMobileNav from "@/hooks/useMobileNav";
import { useRouter } from "next/navigation";

type TMobileNavBtn = {
  children: React.ReactNode;
  href: string;
};

const MobileNavBtn = ({ children, href }: TMobileNavBtn) => {
  const router = useRouter();
  const { setIsOpen } = useMobileNav();
  return (
    <Button
      onClick={() => {
        setIsOpen(false);
        router.push(href);
      }}
      className="text-xl"
    >
      {children}
    </Button>
  );
};

export default MobileNavBtn;
