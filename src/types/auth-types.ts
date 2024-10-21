import { passwordRegex } from "@/lib";
import { z } from "zod";

export const ZodRegisterSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must contain at least 3 Character(s)" }),
    email: z
      .string()
      .email()
      .min(5)
      .transform((val) => val.toLowerCase()),
    password: z
      .string()
      .min(8, { message: "Password must contain at least 8 Character(s)" })
      .max(16, { message: "Password must contain at most 16 Character(s)" })
      .regex(passwordRegex, {
        message: "Password must contain uppercase & lowercase letters",
      }),
    confirm: z
      .string()
      .min(8, { message: "Password must contain at least 8 Character(s)" })
      .max(16, { message: "Password must contain at most 16 Character(s)" }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

export type TRegisterSchema = z.infer<typeof ZodRegisterSchema>;

export const ZodLoginSchema = z.object({
  email: z
    .string()
    .email()
    .min(5)
    .transform((val) => val.toLowerCase()),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 Character(s)" })
    .max(16, { message: "Password must contain at most 16 Character(s)" }),
});

export type TLoginSchema = z.infer<typeof ZodLoginSchema>;

export type result = {
  success: boolean;
  error?: string;
};

export const ZodSettingsSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must contain at least 3 Character(s)" })
      .optional()
      .transform((val) => (val === "" ? undefined : val)),
    email: z
      .string()
      .email()
      .min(5)
      .transform((val) => val.toLowerCase())
      .optional()
      .transform((val) => (val === "" ? undefined : val)),
    password: z
      .string()
      .min(8, { message: "Password must contain at least 8 Character(s)" })
      .max(16, { message: "Password must contain at most 16 Character(s)" })
      .regex(passwordRegex, {
        message: "Password must contain uppercase & lowercase letters",
      })
      .optional()
      .transform((val) => (val === "" ? undefined : val)),
    confirm: z
      .string()
      .min(8, { message: "Password must contain at least 8 Character(s)" })
      .max(16, { message: "Password must contain at most 16 Character(s)" })
      .optional()
      .transform((val) => (val === "" ? undefined : val)),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

export type TSettingsSchema = z.infer<typeof ZodSettingsSchema>;
