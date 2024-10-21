"use client";

import { useState, useRef } from "react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const SearchBar = ({ className }: { className?: string }) => {
  const router = useRouter();
  const params = useSearchParams();
  const query = params.get("query");
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>(() =>
    query ? query : "",
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const handleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleCollapse = () => {
    if (searchQuery === "") {
      setIsExpanded(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/?query=${searchQuery}`);
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-transparent",
        className,
      )}
    >
      <form onSubmit={handleSubmit} className="relative">
        <div
          className={`flex cursor-pointer items-center rounded-full bg-white transition-all duration-300 ease-in-out ${isExpanded ? "w-64" : "w-12"} h-12`}
          onClick={handleExpand}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onBlur={handleCollapse}
            className={`rounded-full bg-transparent py-3 text-black placeholder-gray-600 outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-[#121212] ${isExpanded ? "w-full px-4 opacity-100" : "w-0 px-0 opacity-0"} `}
          />
          <div
            className={`absolute inset-y-0 flex items-center transition-all duration-300 ease-in-out ${isExpanded ? "right-3" : "left-0 right-0 justify-center"} `}
          >
            <Search className="h-5 w-5 text-[#121212]" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
