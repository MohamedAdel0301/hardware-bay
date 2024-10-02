import React, { Suspense } from "react";
import SearchOptions from "@/components/search/SearchOptions";
import { getAllBrandNames, getAllCategories } from "@/actions/data-actions";
import ProductResults from "@/components/search/ProductResults";
import ProductResultsSkeleton from "@/components/search/ProductResultsSkeleton";
const layout = async ({ children }: { children: React.ReactNode }) => {
  const categories = await getAllCategories();
  const brandNames = await getAllBrandNames();
  return (
    <main className="flex w-full gap-4">
      <SearchOptions categories={categories} brandNames={brandNames} />
      <Suspense fallback={<ProductResultsSkeleton />}>
        <ProductResults />
      </Suspense>
    </main>
  );
};

export default layout;
