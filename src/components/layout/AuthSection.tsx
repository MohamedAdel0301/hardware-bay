import React from "react";
import AccountBtn from "./AccountBtn";
import { cn } from "@/lib/utils";
import AuthPrompt from "./AuthPrompt";

import { auth } from "@/auth-no-edge";

const AuthSection = async ({ className }: { className?: string }) => {
  const session = await auth();

  return (
    <div className={cn("", className)}>
      {session?.user ? <AccountBtn /> : <AuthPrompt />}
    </div>
  );
};

export default AuthSection;
