import { TUserSettings } from "@/types/user-types";
import React from "react";

type TUserSettingsForm = {
  user: TUserSettings | null;
};

const UserSettingsForm = ({ user }: TUserSettingsForm) => {
  return <div>UserSettingsForm</div>;
};

export default UserSettingsForm;

