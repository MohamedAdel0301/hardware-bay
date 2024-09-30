import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import React from "react";

type CustomSelectProps = {
  label: string;
  options: { name: string; slug: string }[];
  value: string | undefined;
  onChange: (value: string | undefined) => void;
};

const SearchOptionsSelect: React.FC<CustomSelectProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <>
      <Label htmlFor={label.toLowerCase()} className="text-gray-300">
        {label}
      </Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id={label.toLowerCase()}
          className="border-gray-700 bg-gray-950 text-gray-100"
        >
          <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent className="border-gray-700 bg-gray-800">
          <SelectItem
            value="all"
            className="text-gray-100 focus:bg-gray-950 focus:text-white"
          >
            All
          </SelectItem>
          {options.map((option) => (
            <SelectItem
              key={`${label.toLowerCase()}-${option.slug}`}
              value={option.slug}
              className="text-gray-100 focus:bg-gray-950 focus:text-white"
            >
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default SearchOptionsSelect;
