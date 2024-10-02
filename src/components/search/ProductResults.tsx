import { getAllProducts } from "@/actions/data-actions";
import ProductSlice from "./ProductSlice";

type TProductResults = {
  searchParams: { cat: string; brand: string };
};

const ProductResults = async ({ searchParams }: TProductResults) => {
  const { cat, brand } = searchParams;
  const products = await getAllProducts(cat, brand);
  return (
    <main className="flex-1">
      <h1 className="mb-4 text-3xl">
        Found <strong className="font-extrabold">{products.length}</strong>{" "}
        results
      </h1>
      <section className="grid grid-cols-2 grid-rows-4 gap-8">
        {products.map((product) => (
          <ProductSlice key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default ProductResults;
