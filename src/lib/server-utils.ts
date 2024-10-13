import "server-only";

import { redirect } from "next/navigation";
import { auth } from "@/auth-no-edge";

export const getAuthServer = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/auth/signin");
  }
  return session;
};
