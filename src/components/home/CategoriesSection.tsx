import { getMainCategories } from "@/actions/data-actions";
import CategoryItem from "./CategoryItem";

const CategoriesSection = async () => {
  const categories = await getMainCategories();
  return (
    <section className="my-12 flex w-full flex-col gap-8">
      <h2 className="w-full text-center text-4xl">Categories</h2>
      <section className="grid grid-cols-2 gap-y-4 max-md:gap-x-2 sm:grid-cols-3 md:grid-cols-4">
        {categories.map((category, key) => (
          <CategoryItem category={category} key={category.name + key} />
        ))}
      </section>
    </section>
  );
};

export default CategoriesSection;
