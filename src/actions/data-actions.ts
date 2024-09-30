"use server";
import prisma from "../../prisma/client";

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
