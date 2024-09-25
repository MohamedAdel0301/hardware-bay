"use server";
import prisma from "../../prisma/client";

export const getCategories = () => {
  const categories = prisma.category.findMany({
    select: { name: true, slug: true, image: true },
    take: 12,
  });
  return categories;
};
