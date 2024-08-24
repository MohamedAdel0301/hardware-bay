type TAuthTemplate = {
  children: React.ReactNode;
  type: "login" | "register";
};

const AuthTemplate = ({ children, type }: TAuthTemplate) => {
  return (
    <div className="h-[600px] w-[700px] overflow-hidden rounded-lg bg-white font-roboto text-black shadow-muted">
      <div className="grid h-full grid-cols-2">
        <section className="relative h-full w-full bg-[url('/authform-photo.jpg')] bg-cover bg-top">
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.01)] to-black"></div>
        </section>
        <section className="flex flex-col items-center p-4">
          <h2 className="text-3xl font-semibold">
            {type === "login" ? "Login" : "Register"}
          </h2>
          {children}
        </section>
      </div>
    </div>
  );
};

export default AuthTemplate;
