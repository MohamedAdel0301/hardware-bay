import React from "react";
import defaultProfile from "./../../../public/default-profile.png";
import Image from "next/image";

const ProfileBtn = () => {
  return (
    <div className="h-12 w-12 rounded-full">
      <Image src={defaultProfile} alt="fallback image" />
    </div>
  );
};

export default ProfileBtn;
