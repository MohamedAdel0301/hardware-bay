import { cn } from "@/lib/utils";
import Link from "next/link";

type IProps = {
  className?: string;
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
};

const AuthBtn = ({ className, href, children, onClick }: IProps) => {
  return (
    <button
      className={cn("flex items-center justify-center", className)}
      onClick={onClick}
    >
      <Link href={`${href}`}>{children}</Link>
    </button>
  );
};

export default AuthBtn;
