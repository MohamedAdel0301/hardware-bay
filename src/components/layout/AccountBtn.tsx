"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/actions/auth-actions";
import { useSession } from "next-auth/react";
import defaultProfile from "./../../../public/default-profile.png";
import Image from "next/image";

export default function AccountBtn() {
  const { data } = useSession();

  return (
    <div className="flex justify-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={defaultProfile}
              alt="default user profile photo"
              width={48}
              height={48}
              className="h-12 w-12"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border-none bg-stone-950 shadow-sm shadow-white">
          <DropdownMenuLabel className="text-center text-lg text-white">
            {data ? data.user?.email : "Loading..."}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="text-center text-lg text-white">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuItem className="bg-red-500 transition-all focus:bg-red-600">
            <button
              className="w-full min-w-full text-center text-lg text-white"
              onClick={async () => await logout()}
            >
              Signout
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
