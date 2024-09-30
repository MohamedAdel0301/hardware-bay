import { PrismaClient } from "@prisma/client";
import { brands, Brand, categories, Category } from "./../src/data";

const prisma = new PrismaClient();

async function addCategories(category: Category, index: number) {
  await prisma.category.create({
    data: {
      name: category.name,
      slug: category.slug,
      image: category.image,
    },
  });
  console.log(`added category ${index}`);
}

async function addBrands(brand: Brand, index: number) {
  await prisma.brand.create({
    data: {
      name: brand.name,
      slug: brand.slug,
    },
  });
  console.log(`added brand ${index}`);
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
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
