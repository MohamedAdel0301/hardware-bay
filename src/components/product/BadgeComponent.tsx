import React from "react";
import { Badge } from "../ui/badge";
import { X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const BadgeComponent = ({ sold,className }: { sold: boolean,className?:string }) => {
  return (
    <Badge
      variant={sold ? "destructive" : "secondary"}
      className={cn("self-start text-xl",className)}
    >
      {sold ? (
        <span className="flex items-center">
          Sold <X className="ml-1 h-5 w-5 text-red-500" />
        </span>
      ) : (
        <span className="flex items-center">
          Available <Check className="ml-1 h-5 w-5 text-green-500" />
        </span>
      )}
    </Badge>
  );
};

export default BadgeComponent;
