import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
  className?: string | undefined;
};
export const Row = (props: IProps) => {
  return (
    <div className="w-full px-5 md:px-3 lg:mx-auto lg:w-[950px] xl:w-[1200px] 2xl:w-[1300px]">
      {props.children}
    </div>
  );
};
