import "server-only";

import { redirect } from "next/navigation";
import { auth } from "@/auth-no-edge";

export const checkAuth = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  return session;
};
