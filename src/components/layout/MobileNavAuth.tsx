import React from "react";
import ProfileBtn from "./ProfileBtn";
import MobileNavBtn from "./MobileNavBtn";
import { useSession } from "next-auth/react";

const MobileNavAuth = () => {
  const { status } = useSession();
  return (
    <>
      {status === "authenticated" ? (
        <>
          <ProfileBtn />
          <MobileNavBtn href="/">Account</MobileNavBtn>
          <MobileNavBtn href="/product/new">Add product</MobileNavBtn>
        </>
      ) : (
        <>
          <MobileNavBtn href={"/auth/signup"}>Sign up</MobileNavBtn>
          <MobileNavBtn href={"/auth/signin"}>Login</MobileNavBtn>
        </>
      )}
    </>
  );
};

export default MobileNavAuth;
