"use client";
import { UploadButton } from "@/utils/uploadthing";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

type TImageUploadBtn = {
  setImageUrl: Dispatch<SetStateAction<string | null>>;
};

export default function ImageUploadBtn({ setImageUrl }: TImageUploadBtn) {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          setImageUrl(() => res[0].url);
        }}
        onUploadError={(error: Error) => {
          toast.error(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
