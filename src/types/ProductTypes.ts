import { z } from "zod";

const isValidPositiveNumber = (value: string) => {
  const parsedValue = parseFloat(value);
  return !isNaN(parsedValue) && parsedValue >= 0;
};

export const ZodAddProductSchema = z.object({
  name: z
    .string()
    .min(4, { message: "name must be greater than 4 characters" })
    .max(128, { message: "name cannot exceed 128 characters" }),
  description: z
    .string()
    .min(64, { message: "description must be greater than 64 characters" }),
  image: z.any(),
  price: z.string().refine(isValidPositiveNumber, {
    message: "Price must be a valid number and cannot be negative",
  }),
  category: z.string(),
  brand: z.string(),
});

export type TAddProductSchema = z.infer<typeof ZodAddProductSchema>;
