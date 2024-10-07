import { getOneProduct } from "@/actions/data-actions";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import BadgeComponent from "./BadgeComponent";

type TProductDisplay = {
  productid: string;
};

const ProductDisplay = async ({ productid }: TProductDisplay) => {
  const product = await getOneProduct(productid);
  if (!product) {
    return notFound();
  }
  return (
    <div className="grid grid-cols-1 grid-rows-[30%_60%] gap-4 overflow-hidden lg:grid-cols-[40%_60%] lg:grid-rows-1">
      <section className="group max-h-[300px] overflow-hidden rounded-md border-[1px] shadow-sm shadow-white">
        <Image
          src={product.image}
          width={1200}
          height={1200}
          alt={`product-${product.name}`}
          className="h-full object-cover transition-all delay-75 ease-in-out group-hover:scale-125"
        />
      </section>
      <section className="relative flex flex-col gap-4 p-2 lg:p-8">
        <div className="absolute inset-0 z-[-1] rounded-lg bg-[repeating-linear-gradient(45deg,_#0f1115_0,_#0f1115_10px,_#1a1c20_10px,_#1a1c20_12px)] opacity-50"></div>
        <p className="text-3xl font-semibold max-md:text-center">
          {product.name}
        </p>
        <div className="relative max-w-2xl overflow-auto rounded-lg bg-white p-6 shadow-lg">
          <p className="break-words text-lg leading-relaxed text-gray-800">
            {product.description}
          </p>
          <div className="mt-4 flex flex-col text-xl text-gray-800">
            <p>
              Brand:{" "}
              <strong className="font-bold">{product.brand?.name}</strong>
            </p>
            <p>
              Category:{" "}
              <strong className="font-bold">{product.category?.name}</strong>
            </p>
          </div>
          <p className="text-xl text-gray-800">
            Sold by:{" "}
            <strong className="font-bold">{product.seller?.username}</strong>
          </p>
          <div className="flex justify-between text-xl text-gray-800">
            <p>
              Price:{" "}
              <strong className="font-bold text-green-500">
                E£{product.price}
              </strong>
            </p>
            <BadgeComponent sold={product.sold} className="self-start" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDisplay;
