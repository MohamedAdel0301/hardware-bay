import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const AddProductFormSkeleton = () => {
  return (
    <Card className="h-[80dvh] w-full max-w-md space-y-24 border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 py-20 shadow-lg">
      <CardHeader className="space-y-16 p-4">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-20 w-full" />
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <Skeleton className="h-4 w-full" />
          <div className="space-y-8">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddProductFormSkeleton;
