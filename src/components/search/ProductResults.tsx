import { getProducts } from "@/actions/data-actions";
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
    query: queryParam,
  } = searchParams;
  const [cat, brand, price, query] = checkAll(
    categoryParam,
    brandParam,
    priceParam,
    queryParam,
  );

  const products = await getProducts({ category: cat, brand, price, query });
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
