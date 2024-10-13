"use client";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

type TSignoutBtn = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const SignoutBtn = ({ children, className, onClick }: TSignoutBtn) => {
  const router = useRouter();
  return (
    <button
      className={cn("", className)}
      onClick={async () => {
        signOut();
        router.refresh();
      }}
    >
      {children}
    </button>
  );
};

export default SignoutBtn;
