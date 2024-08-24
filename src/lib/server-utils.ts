"server-only";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function checkAuth() {
  const session = await auth();
  if (!session?.user) {
    redirect("/auth/login");
  }

  return session;
}
