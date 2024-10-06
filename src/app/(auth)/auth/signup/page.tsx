import AuthTemplate from "@/components/auth/AuthTemplate";
import FormRegister from "@/components/auth/FormRegister";
import React from "react";

const NewProductPage = () => {
  return (
    <main className="mt-12 flex min-h-[100%] justify-center">
      <AuthTemplate type="register">
        <FormRegister />
      </AuthTemplate>
    </main>
  );
};

export default NewProductPage;
