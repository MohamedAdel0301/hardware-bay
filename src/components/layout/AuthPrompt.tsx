import React from "react";
import AuthBtn from "./AuthBtn";

const AuthPrompt = () => {
  return (
    <section className="flex w-52 gap-4 text-2xl">
      <AuthBtn
        href={"/auth/signin"}
        className="rounded-md border-2 border-white px-2 py-1 transition-all focus:ring-2 focus:ring-black active:scale-95"
      >
        Login
      </AuthBtn>
      <AuthBtn
        href={"/auth/signup"}
        className="rounded-md bg-btnGradient px-2 py-1 font-medium text-black transition-all active:scale-95"
      >
        Sign up
      </AuthBtn>
    </section>
  );
};

export default AuthPrompt;
