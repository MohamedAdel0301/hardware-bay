import AuthTemplate from "@/components/auth/AuthTemplate";
import FormLogin from "@/components/auth/FormLogin";

const LoginPage = () => {
  return (
    <main className="mt-12 flex min-h-[100%] justify-center">
      <AuthTemplate type="login">
        <FormLogin />
      </AuthTemplate>
    </main>
  );
};

export default LoginPage;
