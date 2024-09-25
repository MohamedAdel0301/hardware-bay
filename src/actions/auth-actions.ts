"use server";

import { signIn, signOut } from "@/auth";
import { result, ZodRegisterSchema } from "@/types/auth-types";
import { AuthError } from "next-auth";
import bcrypt from "bcryptjs";
import prisma from "../../prisma/client";
import { Prisma } from "@prisma/client";

const SALT_ROUNDS = 10;

export async function logIn(data: { email: string; password: string }) {
  try {
    await signIn("credentials", { ...data, redirectTo: "/" });
    return { success: true};
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin": {
          return { success: false, error: "Invalid credentials" };
        }
        case "CredentialsSignin":
          throw err;
        default: {
          return { success: false, error: "Failed to sign in" };
        }
      }
    }
    throw err;
  }
}

export async function signUp(data: unknown): Promise<result> {
  const validation = ZodRegisterSchema.safeParse(data);
  if (!validation.success) {
    return { success: false, error: "Invalid user data" };
  }
  const { username, email, password } = validation.data;

  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        return { success: false, error: "Credentials already exist" };
      }
    }
    return { success: false, error: "Unknown server error" };
  }
  return { success: true };
}

export async function logout() {
  await signOut({ redirectTo: "/auth/signin" });
}
