import { Search } from "lucide-react";
import React from "react";

const SearchBarFallback = () => {
  return (
    <div className="bg-transparent">
      <div
        className={`flex h-12 w-12 cursor-pointer items-center rounded-full bg-gray-900 transition-all duration-300 ease-in-out`}
      >
        <div
          className={`ease-in-outleft-0 absolute inset-y-0 right-0 flex items-center justify-center transition-all duration-300`}
        >
          <Search className="h-5 w-5 text-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default SearchBarFallback;
