import prisma from "./client";
import { brands, Brand, categories, Category } from "./../src/data";

async function addCategories(category: Category, index: number) {
  await prisma.category.create({
    data: {
      name: category.name,
      slug: category.slug,
      image: category.image,
    },
  });
}

async function addBrands(brand: Brand, index: number) {
  await prisma.brand.create({
    data: {
      name: brand.name,
      slug: brand.slug,
    },
  });
}

async function main() {
  for (const [index, category] of categories.entries()) {
    await addCategories(category, index);
  }
  for (const [index, brand] of brands.entries()) {
    await addBrands(brand, index);
  }
}

main()
  .catch((e) => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
