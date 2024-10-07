"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodLoginSchema, TLoginSchema } from "@/types/auth-types";
import SubmitBtn from "./SubmitBtn";
import { logIn } from "@/actions/auth-actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const FormLogin = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(ZodLoginSchema),
  });

  const submitForm = async (data: TLoginSchema) => {
    try {
      const result = await logIn(data);
      if (result.success) {
        toast.success("Successfully logged in");
        router.push("/");
        router.refresh();
      } else if (!result.success && result.error) {
        toast.error(result.error);
      }
    } catch (err) {}
  };

  return (
    <form
      className="mb-8 flex h-full w-full flex-col justify-center gap-4 md:gap-2"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          id="email"
          placeholder="Enter your email"
          className="input-element md:max-w-[90%]"
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
          className="input-element md:max-w-[90%]"
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
