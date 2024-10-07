import ProductDisplay from "@/components/product/ProductDisplay";
import React from "react";

type TProductPage = {
  params: { id: string };
};

const ProductPage = ({ params }: TProductPage) => {
  return (
    <main className="mt-12">
      <ProductDisplay productid={params.id} />
    </main>
  );
};

export default ProductPage;
