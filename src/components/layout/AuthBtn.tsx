import { cn } from "@/lib/utils";
import Link from "next/link";

type IProps = {
  className?: string;
  children: React.ReactNode;
  href: string;
};

const AuthBtn = ({ className, href, children }: IProps) => {
  return (
    <button className={cn("flex items-center justify-center", className)}>
      <Link href={`${href}`}>{children}</Link>
    </button>
  );
};

export default AuthBtn;
