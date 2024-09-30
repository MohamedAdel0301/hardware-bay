"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Brand, Category } from "@/data";

type TSearchOptions = {
  brandNames: Brand[];
  categories: Category[];
};

const SearchOptions = ({ categories, brandNames }: TSearchOptions) => {
  const [priceRange, setPriceRange] = useState([0, 95000]);

  return (
    <Card className="w-full max-w-xs border-gray-800 bg-gray-900">
      <CardHeader className="border-b border-gray-800">
        <CardTitle className="text-center text-2xl font-bold text-gray-100">
          Search Options
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-2">
          <Label htmlFor="category" className="text-gray-300">
            Category
          </Label>
          <Select>
            <SelectTrigger
              id="category"
              className="border-gray-700 bg-gray-950 text-gray-100"
            >
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="border-gray-700 bg-gray-800">
              {categories.map((category) => (
                <SelectItem
                  value={category.slug}
                  className="text-gray-100 focus:bg-gray-950 focus:text-white"
                >
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="brand" className="text-gray-300">
            Brand
          </Label>
          <Select>
            <SelectTrigger
              id="brand"
              className="border-gray-700 bg-gray-950 text-gray-100"
            >
              <SelectValue placeholder="Select brand" />
            </SelectTrigger>
            <SelectContent className="border-gray-700 bg-gray-800">
              {brandNames.map((brand) => (
                <SelectItem
                  value={brand.slug}
                  className="text-gray-100 focus:bg-gray-950 focus:text-white"
                >
                  {brand.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <Label className="text-gray-300">Price Range</Label>
          <Slider
            min={0}
            max={1000}
            step={10}
            value={priceRange}
            onValueChange={setPriceRange}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-400">
            <span>E£{priceRange[0]}</span>
            <span>E£{priceRange[1]}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchOptions;
