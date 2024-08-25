type TProductPage = {
  param: { product: string };
};

const ProductPage = ({ param: { product } }: TProductPage) => {
  return <div>itemID: {product} </div>;
};

export default ProductPage;
