import { passwordRegex } from "@/lib";
import { z } from "zod";

export const ZodRegisterSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be greater than 2 characters" }),
    email: z.string().email().min(5),
    password: z
      .string()
      .min(8, { message: "Password must be between 8 and 16 characters" })
      .max(16, { message: "Password must be between 8 and 16 characters" })
      .regex(passwordRegex, {
        message: "Password must contain uppercase & lowercase letters",
      }),
    confirm: z.string().min(8).max(16),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

export type TRegisterSchema = z.infer<typeof ZodRegisterSchema>;

export const ZodLoginSchema = z.object({
  email: z.string().email().min(5),
  password: z
    .string()
    .min(8, { message: "Password must be between 8 and 16 characters" })
    .max(16, { message: "Password must be between 8 and 16 characters" }),
});

export type TLoginSchema = z.infer<typeof ZodLoginSchema>;
