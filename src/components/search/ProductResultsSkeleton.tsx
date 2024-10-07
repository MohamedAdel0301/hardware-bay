import ProductSliceSkeleton from "./ProductSliceSkeleton";

const ProductResultsSkeleton = () => {
  return (
    <main className="flex-1">
      <section className="grid grid-cols-1 grid-rows-8 gap-8 md:grid-cols-2 md:grid-rows-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductSliceSkeleton key={index} />
        ))}
      </section>
    </main>
  );
};

export default ProductResultsSkeleton;
