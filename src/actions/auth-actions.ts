"use server";

import { signIn } from "@/auth";
import { result, ZodRegisterSchema } from "@/types/auth-types";
import { AuthError } from "next-auth";
import bcrypt from "bcryptjs";
import prisma from "../../prisma/client";
import { Prisma } from "@prisma/client";
import { sleep } from "@/lib/utils";

const SALT_ROUNDS = 10;

export async function logIn(data: unknown) {
  const validation = ZodRegisterSchema.safeParse(data);
  if (!validation.success) {
    return { message: "Invalid request" };
  }
  try {
    await signIn("credentials", validation.data);
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin": {
          return { message: "Invalid credentials" };
        }
        default: {
          return { message: "Couldn't sign in" };
        }
      }
    }
    throw err;
  }
}

export async function signUp(data: unknown): Promise<result> {
  await sleep(3000);
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
