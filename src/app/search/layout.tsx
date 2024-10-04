import React, { Suspense } from "react";
import SearchOptions from "@/components/search/SearchOptions";
import { getAllBrandNames, getAllCategories } from "@/actions/data-actions";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const categories = await getAllCategories();
  const brandNames = await getAllBrandNames();
  return (
    <main className="flex w-full gap-4">
      <Suspense fallback={<div>...Loading</div>}>
        <SearchOptions categories={categories} brandNames={brandNames} />
      </Suspense>
      {children}
    </main>
  );
};

export default layout;
