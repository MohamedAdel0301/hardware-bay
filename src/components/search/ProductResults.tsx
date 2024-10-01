import { getAllProducts } from "@/actions/data-actions";

const ProductResults = async () => {
  const products = await getAllProducts();
  console.log(products);
  return <div></div>;
};

export default ProductResults;
