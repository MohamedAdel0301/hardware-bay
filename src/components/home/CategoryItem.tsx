import { Category } from "@/data";
import Image from "next/image";
import Link from "next/link";

type TCategoryItem = {
  category: Category;
};
const CategoryItem = ({ category }: TCategoryItem) => {
  return (
    <Link href={`/category?cat=${category.slug}`}>
      <div className="group flex flex-col items-center gap-y-2">
        <div className="h-[160px] w-[160px] rounded-full bg-white">
          <Image
            src={`${category.image}`}
            alt={`${category.slug}-category`}
            width={200}
            height={200}
            className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <p className="text-2xl">{category.name}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
