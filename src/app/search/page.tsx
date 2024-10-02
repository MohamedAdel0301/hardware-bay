import React, { Suspense } from "react";
import ProductResults from "@/components/search/ProductResults";
import ProductResultsSkeleton from "@/components/search/ProductResultsSkeleton";

const page = ({
  searchParams,
}: {
  searchParams: { cat: string; brand: string };
}) => {
  return (
    <Suspense fallback={<ProductResultsSkeleton />}>
      <ProductResults searchParams={searchParams} />
    </Suspense>
  );
};

export default page;
