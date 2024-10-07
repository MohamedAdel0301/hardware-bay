import React, { useEffect, useState } from "react";
import ProfileBtn from "./ProfileBtn";
import { useSession } from "next-auth/react";
import MobileNavBtn from "./MobileNavBtn";

const MobileNavAuth = () => {
  const { status } = useSession();
  const [isLoggedin, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (status === "authenticated") {
      setIsLoggedIn(() => true);
    }
    if (status === "unauthenticated") {
      setIsLoggedIn(() => false);
    }
  }, [status]);
  return (
    <>
      {isLoggedin ? (
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
