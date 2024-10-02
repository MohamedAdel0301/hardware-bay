import { getAllBrandNames, getAllCategories } from "@/actions/data-actions";
import AddProductForm from "@/components/product/AddProductForm";
import React from "react";

const AddProductPage = async () => {
  const categories = await getAllCategories();
  const brands = await getAllBrandNames();

  return (
    <main className="flex justify-center">
      <div className="w-full max-w-md flex-1">
        <AddProductForm categories={categories} brands={brands} />
      </div>
    </main>
  );
};

export default AddProductPage;
