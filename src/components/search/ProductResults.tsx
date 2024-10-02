import { getAllProducts } from "@/actions/data-actions";
import ProductSlice from "./ProductSlice";

const ProductResults = async () => {
  const products = await getAllProducts();
  console.log(products);
  return (
    <main className="flex-1">
      <section className="grid grid-cols-2 grid-rows-4 gap-8">
        {products.map((product) => (
          <ProductSlice key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default ProductResults;
