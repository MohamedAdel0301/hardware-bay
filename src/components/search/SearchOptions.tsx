"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Brand, Category } from "@/data";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import SearchOptionsSelect from "./SearchOptionsSelect";
import { Button } from "../ui/button";

type TSearchOptions = {
  brandNames: Brand[];
  categories: Category[];
  className?: string;
};

const SearchOptions = ({
  categories,
  brandNames,
  className,
}: TSearchOptions) => {
  const router = useRouter();

  const [priceRange, setPriceRange] = useState([0, 45000]);
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<string | undefined>(
    searchParams.get("cat") ?? undefined,
  );
  const [brand, setBrand] = useState<string | undefined>(
    searchParams.get("brand") ?? undefined,
  );

  const onChangeParameters = () => {
    const params = new URLSearchParams();
    const query = searchParams.get("q");
    if (query) {
      params.set("q", query);
    }
    if (category) {
      params.set("cat", category);
    }
    if (brand) {
      params.set("brand", brand);
    }
    if (priceRange) {
      params.set("price", String(priceRange[0]));
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className={cn("w-full max-w-xs flex-1", className)}>
      <Card className="w-full border-gray-800 bg-gray-900">
        <CardHeader className="border-b border-gray-800">
          <CardTitle className="text-center text-2xl font-bold text-gray-100">
            Search Options
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="space-y-2">
            <SearchOptionsSelect
              label="Category"
              onChange={setCategory}
              value={category}
              options={categories}
            />
          </div>
          <div className="space-y-2">
            <SearchOptionsSelect
              label="Brand"
              onChange={setBrand}
              value={brand}
              options={brandNames}
            />
          </div>

          <div className="space-y-4">
            <Label className="text-gray-300">Price Range</Label>
            <Slider
              min={0}
              max={45000}
              step={100}
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
        <CardFooter className="border-t border-gray-800 pt-4">
          <Button
            className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition-all delay-75 hover:bg-blue-700"
            onClick={onChangeParameters}
          >
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SearchOptions;
