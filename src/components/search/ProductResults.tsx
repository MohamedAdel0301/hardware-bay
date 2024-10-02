import { getAllProducts } from "@/actions/data-actions";
import ProductSlice from "./ProductSlice";
import { checkAll, cn } from "@/lib/utils";
import { TSearchPageParams } from "@/app/search/page";

type TProductResults = {
  searchParams: TSearchPageParams;
  className: string;
};

const ProductResults = async ({ searchParams, className }: TProductResults) => {
  let {
    cat: categoryParam,
    brand: brandParam,
    price: priceParam,
  } = searchParams;
  const [cat, brand, price] = checkAll(categoryParam, brandParam, priceParam);

  const products = await getAllProducts({ category: cat, brand, price });
  return (
    <main className={cn("", className)}>
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
