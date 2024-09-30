import React from "react";
import SearchOptions from "@/components/search/SearchOptions";
import { getAllBrandNames, getAllCategories } from "@/actions/data-actions";
const layout = async ({ children }: { children: React.ReactNode }) => {
  const categories = await getAllCategories();
  const brandNames = await getAllBrandNames();
  return (
    <main>
      <SearchOptions categories={categories} brandNames={brandNames} />
    </main>
  );
};

export default layout;
