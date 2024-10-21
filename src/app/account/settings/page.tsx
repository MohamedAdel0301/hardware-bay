import { getOneUser } from "@/actions/auth-actions";
import UserSettingsForm from "@/components/settings/UserSettingsForm";
import { getAuthServer } from "@/lib/server-utils";
import React from "react";
import WithAuth from "@/components/hoc/WithAuth";

const SettingsPage = async () => {
  const session = await getAuthServer();
  const user = await getOneUser({ id: session?.user?.id });
  return (
    <main className="flex justify-center">
      <UserSettingsForm user={user} />
    </main>
  );
};

export default WithAuth(SettingsPage);
