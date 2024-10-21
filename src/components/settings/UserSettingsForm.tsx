"use client";
import { TUserSettings } from "@/types/user-types";
import React from "react";
import SettingsImageFrame from "./SettingsImageFrame";
import Image from "next/image";
import defaultProfile from "./../../../public/default-profile.png";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { TSettingsSchema, ZodSettingsSchema } from "@/types/auth-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUser } from "@/actions/auth-actions";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

type TUserSettingsForm = {
  user: TUserSettings | null;
};

const UserSettingsForm = ({ user }: TUserSettingsForm) => {
  const { data: session } = useSession();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<TSettingsSchema>({
    resolver: zodResolver(ZodSettingsSchema),
    defaultValues: { email: user?.email, username: user?.username },
  });

  const submitForm = async (data: TSettingsSchema) => {
    const id = session?.user?.id!;
    const result = await updateUser({ id, data });
    if (result) {
      toast.success("Updated settings successfully");
      router.refresh();
    } else {
      toast.error("Couldn't update settings");
    }
  };

  const isDirtyAlt = !!Object.keys(dirtyFields).length;

  return (
    <div className="flex h-[720px] w-[700px] min-w-[350px] max-w-[700px] flex-col space-y-8 overflow-hidden rounded-lg bg-white px-8 py-4 font-roboto text-black shadow-muted">
      <h1 className="text-2xl font-semibold">Account Settings</h1>

      <section className="flex w-full items-center gap-12 pl-6 md:pl-12">
        <SettingsImageFrame>
          <Image src={user?.image ?? defaultProfile} alt="user image" />
        </SettingsImageFrame>
        <div className="flex flex-col gap-4">
          <Button className="bg-[#121212] text-lg text-white">
            Change Picture
          </Button>
          <Button variant={"destructive"} className="text-lg">
            Delete Picture
          </Button>
        </div>
      </section>

      <form
        className="flex w-[90%] flex-col gap-2 self-center md:w-[80%]"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="flex flex-col space-y-1">
          <label htmlFor="username" className="font-semibold">
            Username
          </label>
          <input
            id="username"
            className="input-element"
            placeholder="Username"
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
            className="input-element"
            placeholder="Email"
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
            className="input-element"
            placeholder="Password"
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
            className="input-element"
            placeholder="Confirm Password"
            {...register("confirm")}
          />
          {errors.confirm && (
            <p className="text-xs font-bold text-red-500">
              {errors.confirm.message}
            </p>
          )}
        </div>
        <Button className="bg-[#121212]" disabled={isSubmitting || !isDirtyAlt}>
          Apply Changes
        </Button>
      </form>
    </div>
  );
};

export default UserSettingsForm;
