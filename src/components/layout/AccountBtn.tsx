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
import Link from "next/link";
import { useEffect, useState } from "react";
import ProfileBtn from "./ProfileBtn";
import { useRouter } from "next/navigation";

export default function AccountBtn() {
  const router = useRouter();
  const { data, status } = useSession();
  const [email, setEmail] = useState<string | null | undefined>(() =>
    data ? data.user?.email : "Loading...",
  );

  //when status changes to authenticated, change the placeholder email
  useEffect(() => {
    if (status === "authenticated") {
      setEmail(data?.user?.email);
    }
  }, [status, data]);

  return (
    <div className="flex justify-center gap-4">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>
          <ProfileBtn />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-52 border-none bg-stone-950 shadow-sm shadow-white">
          <DropdownMenuLabel className="text-center text-lg text-white">
            {email}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="text-center text-lg text-white">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuItem
            className="my-2 flex w-full justify-center text-center text-lg text-white focus:cursor-pointer focus:bg-stone-700 focus:text-white"
            asChild
          >
            <Link href="/product/new" className="w-full">
              Add Product
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-red-500 transition-all focus:bg-red-600">
            <button
              className="w-full min-w-full text-center text-lg text-white"
              onClick={async () => {
                await logout();
                router.refresh();
              }}
            >
              Signout
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
