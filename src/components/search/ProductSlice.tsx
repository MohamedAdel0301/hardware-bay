import { Product } from "@prisma/client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { getOneUser } from "@/actions/auth-actions";
import ProductSliceBg from "./ProductSliceBg";

type TProductSlice = {
  product: Product;
};

const ProductSlice = async ({ product }: TProductSlice) => {
  const user = await getOneUser({ id: product.sellerId });
  return (
    <Card className="relative overflow-hidden rounded-lg border-none bg-transparent p-1 hover:cursor-pointer">
      <CardContent className="p-0">
        <div className="flex flex-col overflow-hidden">
          <section className="relative w-full min-w-full overflow-hidden rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={600}
              className="min-h-48 scale-110 object-cover"
            />
          </section>
          <section className="flex w-full flex-col justify-between p-4 sm:w-1/3">
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-white">
                {product.name}
              </h3>
              <p className="text-xs text-gray-200">
                Sold by <strong className="font-bold">{user?.email}</strong>
              </p>
            </div>
            <div>
              <span className="text-lg font-bold text-green-600">
                E£{product.price.toFixed(2)}
              </span>
            </div>
          </section>
        </div>
      </CardContent>
      <ProductSliceBg />
    </Card>
  );
};

export default ProductSlice;
