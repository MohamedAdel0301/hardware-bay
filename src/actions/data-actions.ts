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

export const getOneProduct = async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) return null;
  const seller = await prisma.user.findUnique({
    where: { id: product.sellerId },
    select: { username: true },
  });
  const category = await prisma.category.findUnique({
    where: { slug: product.categorySlug },
    select: { name: true },
  });
  const brand = await prisma.brand.findUnique({
    where: { slug: product.brandSlug },
    select: { name: true },
  });
  const productMetadata = { ...product, seller, category, brand };
  return productMetadata;
};

export const getProducts = async ({
  category,
  brand,
  price,
  query,
}: {
  category?: string;
  brand?: string;
  price?: string;
  query?: string;
}) => {
  const products = await prisma.product.findMany({
    where: {
      ...(category && { categorySlug: category }),
      ...(brand && { brandSlug: brand }),
      ...(price && {
        price: {
          lte: parseFloat(price),
        },
      }),
      ...(query && {
        name: {
          contains: query,
          mode: "insensitive",
        },
      }),
    },
  });
  return products;
};
