import { auth } from "@/auth-no-edge";
import { redirect } from "next/navigation";
import React from "react";

type TWithAuthProps = {
  [key: string]: string;
};

const WithAuth = (Component: React.FC) => {
  const WrappedComponent = async (props: TWithAuthProps) => {
    const session = await auth();

    if (!session?.user) {
      redirect("/auth/signin");
    }

    return <Component {...props} />;
  };
  //set displayname for debugging
  WrappedComponent.displayName = `WithAuth(${Component.displayName || Component.name || "Component"})`;
  return WrappedComponent;
};

export default WithAuth;
