"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  PlusCircle,
  DollarSign,
  Tag,
  Grid,
  Folder,
  FileText,
  Image,
} from "lucide-react";
import { Brand, Category } from "@/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { TAddProductSchema, ZodAddProductSchema } from "@/types/ProductTypes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fileListToBase64 } from "@/lib/utils";
import { AddProduct } from "@/actions/data-actions";
import { useSession } from "next-auth/react";
import AddProductFormSkeleton from "./AddProductFormSkeleton";

type TAddProductForm = {
  categories: Category[];
  brands: Brand[];
};

const AddProductForm = ({ categories, brands }: TAddProductForm) => {
  const { status, data: session } = useSession();
  const userId = session?.user?.id as string;
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<TAddProductSchema>({
    resolver: zodResolver(ZodAddProductSchema),
  });

  const submitForm = async (data: TAddProductSchema) => {
    let result: string | null;
    try {
      result = await fileListToBase64(data.image);
      const completeData = { ...data, image: result };
      await AddProduct(completeData, userId);
    } catch (error) {
      setError("image", {
        type: "value",
        message: "error parsing image",
      });
    }
  };

  if (status === "loading") {
    return <AddProductFormSkeleton />;
  }

  return (
    <Card className="w-full max-w-md border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg">
      <CardHeader className="border-b border-gray-700 pb-6">
        <CardTitle className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-center text-3xl font-bold text-transparent">
          New Product
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit((data) => submitForm(data))}>
        <CardContent className="space-y-8 pt-8">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center text-gray-300">
              <Tag className="mr-2 h-4 w-4 text-blue-400" />
              Product Name
            </Label>
            <Input
              id="name"
              className="border-gray-600 bg-gray-800 text-gray-100 autofill:bg-gray-800 autofill:text-gray-100 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter product name"
              required
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="description"
              className="flex items-center text-gray-300"
            >
              <FileText className="mr-2 h-4 w-4 text-purple-400" />
              Description
            </Label>
            <Textarea
              id="description"
              className="max-h-[150px] min-h-[120px] border-gray-600 bg-gray-800 text-gray-100 focus:border-purple-500 focus:ring-purple-500"
              placeholder="Enter product description"
              required
              {...register("description")}
            />
            {errors.description && (
              <p className="text-xs text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="price" className="flex items-center text-gray-300">
              <DollarSign className="mr-2 h-4 w-4 text-green-400" />
              Price
            </Label>
            <div className="relative">
              <Input
                id="price"
                type="number"
                className="border-gray-600 bg-gray-800 pl-8 text-gray-100 focus:border-green-500 focus:ring-green-500"
                placeholder="0"
                min="50"
                max="45000"
                required
                {...register("price")}
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400">
                E£
              </span>
            </div>
            {errors.price && (
              <p className="text-xs text-red-500">{errors.price.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label className="flex items-center text-gray-300">
              <Image className="mr-2 h-4 w-4 text-purple-400" />
              Image
            </Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              className="bg-gray-800 text-gray-100 file:cursor-pointer file:rounded-sm file:bg-white focus:cursor-pointer"
              {...register("image")}
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="category"
              className="flex items-center text-gray-300"
            >
              <Folder className="mr-2 h-4 w-4 text-blue-400" />
              Category
            </Label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full bg-gray-800 text-gray-100">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800">
                    {categories.map((category) => (
                      <SelectItem
                        value={category.slug}
                        key={category.slug}
                        className="text-white"
                      >
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="brand" className="flex items-center text-gray-300">
              <Grid className="mr-2 h-4 w-4 text-blue-400" />
              Brand
            </Label>
            <Controller
              name="brand"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full bg-gray-800 text-gray-100">
                    <SelectValue placeholder="Select Brand" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800">
                    {brands.map((brand) => (
                      <SelectItem
                        value={brand.slug}
                        key={brand.slug}
                        className="text-white"
                      >
                        {brand.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </CardContent>
        <CardFooter className="border-t border-gray-700 pt-6">
          <Button
            type="submit"
            className="w-full transform rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 active:scale-95"
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            Add Product
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default AddProductForm;
