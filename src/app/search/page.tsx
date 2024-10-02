import React, { Suspense } from "react";
import ProductResults from "@/components/search/ProductResults";
import ProductResultsSkeleton from "@/components/search/ProductResultsSkeleton";

export type TSearchPageParams = {
  cat?: string;
  brand?: string;
  price?: string;
  query?: string;
};

const SearchPage = ({ searchParams }: { searchParams: TSearchPageParams }) => {
  return (
    <Suspense fallback={<ProductResultsSkeleton />}>
      <ProductResults searchParams={searchParams} className="flex-1" />
    </Suspense>
  );
};

export default SearchPage;
