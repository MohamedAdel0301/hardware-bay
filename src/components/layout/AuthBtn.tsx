import { cn } from "@/lib/utils";
import Link from "next/link";

type IProps = {
  className?: string;
  children: React.ReactNode;
  href: string;
};

const AuthBtn = ({ className, href, children }: IProps) => {
  return (
    <Link
      href={`${href}`}
      className={cn("flex items-center justify-center", className)}
    >
      {children}
    </Link>
  );
};

export default AuthBtn;
