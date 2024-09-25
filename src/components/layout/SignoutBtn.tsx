"use client";

import { logout } from "@/actions/auth-actions";

export default function SignoutBtn() {
  return (
    <div className="flex w-52 justify-center gap-4">
      <button
        className="rounded-md bg-red-600 px-2 py-1 text-xl text-white transition-all hover:scale-105 focus:ring-2 focus:ring-black active:scale-95"
        onClick={async () => await logout()}
      >
        Signout
      </button>
    </div>
  );
}
