import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export function checkAll(
  ...args: (string | undefined)[]
): (string | undefined)[] {
  return args.map((arg) => (arg === "all" ? undefined : arg));
}
