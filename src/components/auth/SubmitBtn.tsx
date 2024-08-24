import { cn } from "@/lib/utils";

const SubmitBtn = ({ className }: { className?: string }) => {
  return (
    <button
      className={cn(
        "max-w-fit transform self-center rounded-lg bg-black px-4 py-2 text-xl text-white shadow-sm transition-transform focus:outline-none active:scale-95",
        className,
      )}
      type="submit"
    >
      Submit
    </button>
  );
};

export default SubmitBtn;
