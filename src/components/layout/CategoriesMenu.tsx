import useGlobalData from "@/hooks/useGlobalData";
import Link from "next/link";

const CategoriesMenu = () => {
  const { categories } = useGlobalData();
  return (
    <div className="grid grid-cols-4 grid-rows-6 gap-1">
      {categories.map((category) => (
        <Link
          href={`/search?cat=${category.slug}`}
          key={`cat-${category.slug}`}
        >
          <div
            key={category.slug}
            className="flex min-w-full justify-center rounded-sm p-1 text-white transition-all hover:bg-stone-700"
          >
            {category.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesMenu;
