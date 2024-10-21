import React from "react";

const SettingsImageFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex aspect-square max-h-40 max-w-40 items-center justify-center rounded-full border-2 border-gray-400 p-1 shadow-sm">
      {children}
    </div>
  );
};

export default SettingsImageFrame;
