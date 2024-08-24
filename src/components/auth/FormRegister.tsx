"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterSchema, ZodRegisterSchema } from "@/types/auth-types";
import SubmitBtn from "./SubmitBtn";
import { signUp } from "@/actions/auth-actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const FormRegister = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(ZodRegisterSchema),
  });

  const subtmitForm = async (data: TRegisterSchema) => {
    const result = await signUp(data);
    if (result.success) {
      toast.success("Registered successfully");
      router.push("/auth/signin");
      router.refresh();
    } else if (result.error) {
      toast.error(result.error);
    }
  };

  return (
    <form
      className="mb-8 flex h-full w-full flex-col justify-center space-y-2"
      onSubmit={handleSubmit((data) => subtmitForm(data))}
    >
      <div className="flex flex-col space-y-1">
        <label htmlFor="username" className="font-semibold">
          Username
        </label>
        <input
          id="username"
          placeholder="Enter your username"
          className="input-element max-w-[90%]"
          required
          {...register("username")}
        />
        {errors.username && (
          <p className="text-xs font-bold text-red-500">
            {errors.username.message}
          </p>
        )}
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          id="email"
          placeholder="Enter your email"
          className="input-element max-w-[90%]"
          required
          type="email"
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
          required
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-xs font-bold text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="confirm" className="font-semibold">
          Confirm Password
        </label>
        <input
          id="confirm"
          className="input-element max-w-[90%]"
          required
          placeholder="Confirm password"
          type="password"
          {...register("confirm")}
        />
        {errors.confirm && (
          <p className="text-xs font-bold text-red-500">
            {errors.confirm.message}
          </p>
        )}
      </div>
      <SubmitBtn disabled={isSubmitting} />
    </form>
  );
};

export default FormRegister;
