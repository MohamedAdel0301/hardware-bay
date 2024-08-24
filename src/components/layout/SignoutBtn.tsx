"use client";

import { logout } from "@/actions/auth-actions";

export default function SignoutBtn() {
  return (
    <div className="flex w-52 justify-center gap-4">
      <button
        className="rounded-md bg-red-500 px-2 py-1 text-2xl text-white transition-all focus:ring-2 focus:ring-black active:scale-95"
        onClick={async () => await logout()}
      >
        Signout
      </button>
    </div>
  );
}
