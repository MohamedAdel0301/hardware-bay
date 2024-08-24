"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodLoginSchema, TLoginSchema } from "@/types/auth-types";
import SubmitBtn from "./SubmitBtn";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(ZodLoginSchema),
  });

  const subtmitForm = (data: TLoginSchema) => {
    console.log(data);
  };

  return (
    <form
      className="mb-8 flex h-full w-full flex-col justify-center space-y-2"
      onSubmit={handleSubmit((data) => subtmitForm(data))}
    >
      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          id="email"
          placeholder="Enter your email"
          className="input-element max-w-[90%]"
          type="email"
          required
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs font-bold text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <input
          id="password"
          placeholder="Enter your password"
          className="input-element max-w-[90%]"
          type="password"
          required
          {...register("password")}
        />
        {errors.password && (
          <p className="text-xs font-bold text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>
      <SubmitBtn />
    </form>
  );
};

export default FormLogin;
