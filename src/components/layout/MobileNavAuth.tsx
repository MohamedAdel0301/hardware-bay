import React from "react";
import ProfileBtn from "./ProfileBtn";
import Link from "next/link";
import { useSession } from "next-auth/react";

const MobileNavAuth = () => {
  const { data, status } = useSession();
  return (
    <>
      {status === "authenticated" && data?.user ? (
        <>
          <ProfileBtn />
          <Link href="/" className="link-underline">
            Account
          </Link>
          <Link href="/product/new" className="link-underline">
            Add product
          </Link>
        </>
      ) : (
        <>
          <Link href={"/auth/signup"} className="link-underline">
            Sign up
          </Link>
          <Link href={"/auth/signin"} className="link-underline">
            Login
          </Link>
        </>
      )}
    </>
  );
};

export default MobileNavAuth;
