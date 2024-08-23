"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const passwordValidator = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,16}$/);

const ZodRegisterSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be greater than 2 characters" }),
    email: z.string().email().min(5),
    password: z
      .string()
      .min(8, { message: "Password must be between 8 and 16 characters" })
      .max(16, { message: "Password must be between 8 and 16 characters" })
      .regex(passwordValidator, {
        message: "Password must contain uppercase & lowercase letters",
      }),
    confirm: z.string().min(8).max(16),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

type TRegisterSchema = z.infer<typeof ZodRegisterSchema>;

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(ZodRegisterSchema),
  });

  const subtmitForm = (data: TRegisterSchema) => {
    console.log(data);
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
      <button
        className="max-w-fit transform self-center rounded-lg bg-black px-4 py-2 text-xl text-white shadow-sm transition-transform focus:outline-none active:scale-95"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default FormRegister;
