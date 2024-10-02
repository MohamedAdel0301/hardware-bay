"use server";
import prisma from "../../prisma/client";
import { TAddProductSchema } from "@/types/ProductTypes";

export const getMainCategories = async () => {
  const mainCategories = await prisma.category.findMany({
    select: { name: true, slug: true, image: true },
    take: 12,
  });
  return mainCategories;
};

export const getAllCategories = async () => {
  const categories = await prisma.category.findMany({
    select: { name: true, slug: true, image: true },
  });
  return categories;
};

export const getAllBrandNames = async () => {
  const brands = await prisma.brand.findMany({
    select: { name: true, slug: true },
  });
  return brands;
};

export const postProduct = async (
  product: TAddProductSchema,
  userId: string,
) => {
  await prisma.product.create({
    data: {
      name: product.name,
      description: product.description,
      image: product.image,
      price: Number(product.price),
      seller: {
        connect: {
          id: userId,
        },
      },
      brand: {
        connect: {
          slug: product.brand,
        },
      },
      category: {
        connect: {
          slug: product.category,
        },
      },
    },
  });
};

export const getAllProducts = async ({
  category,
  brand,
  price,
}: {
  category?: string;
  brand?: string;
  price?: string;
}) => {
  const products = prisma.product.findMany({
    where: {
      ...(category && { categorySlug: category }),
      ...(brand && { brandSlug: brand }),
      ...(price && {
        price: {
          lte: parseFloat(price), // Fetch products with price <= provided price
        },
      }),
    },
  });
  return products;
};
