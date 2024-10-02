import ProductSliceSkeleton from "./ProductSliceSkeleton";

const ProductResultsSkeleton = () => {
  return (
    <main className="flex-1">
      <section className="grid grid-cols-2 grid-rows-4 gap-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductSliceSkeleton key={index} />
        ))}
      </section>
    </main>
  );
};

export default ProductResultsSkeleton;
