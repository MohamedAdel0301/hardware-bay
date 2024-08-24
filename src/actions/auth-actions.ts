"use server";

import { signIn } from "@/auth";
import { ZodRegisterSchema } from "@/types/auth-types";
import { AuthError } from "next-auth";
import bcrypt from "bcryptjs";
import prisma from "../../prisma/client";
import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";

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

export async function signUp(data: unknown) {
  const validation = ZodRegisterSchema.safeParse(data);
  if (!validation.success) {
    return { message: "Invalid request" };
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
        return {
          message: "Email already exists.",
        };
      }
    }
    return {
      message: "Could not create user.",
    };
  }
  redirect("/auth/login");
}
