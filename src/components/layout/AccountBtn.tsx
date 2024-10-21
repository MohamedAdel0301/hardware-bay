import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import ProfileBtn from "./ProfileBtn";
import { auth } from "@/auth-no-edge";
import SignoutBtn from "./SignoutBtn";
import { PlusCircle, User2 } from "lucide-react";

const AccountBtn = async () => {
  const session = await auth();

  return (
    <div className="flex justify-center gap-4">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>
          <ProfileBtn />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-52 border-none bg-stone-950 shadow-sm shadow-white">
          <DropdownMenuLabel className="text-center text-lg text-white">
            {session?.user?.email ?? "Loading..."}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="my-2 flex w-full justify-center text-center text-lg text-white focus:cursor-pointer focus:bg-stone-700 focus:text-white"
            asChild
          >
            <Link
              href="/account/settings"
              className="flex w-full items-center gap-2"
            >
              <User2 />
              My Account
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="my-2 flex w-full justify-center text-center text-lg text-white focus:cursor-pointer focus:bg-stone-700 focus:text-white"
            asChild
          >
            <Link
              href="/product/new"
              className="flex w-full items-center gap-2"
            >
              <PlusCircle />
              Add Product
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-red-500 transition-all focus:bg-red-600">
            <SignoutBtn className="w-full min-w-full text-center text-lg text-white">
              Signout
            </SignoutBtn>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default AccountBtn;
