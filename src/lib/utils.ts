import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export function fileListToBase64(fileList: FileList): Promise<string | null> {
  return new Promise((resolve, reject) => {
    if (fileList.length === 0) {
      resolve(null);
      return;
    }
    const file = fileList[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result;
      if (typeof result === "string") {
        resolve(result);
      } else {
        reject(new Error("FileReader result is not a string."));
      }
    };
    reader.readAsDataURL(file);
  });
}
