import { cn } from "@/lib/utils";

type TSubmitBtn = {
  className?: string;
  disabled?: boolean;
};

const SubmitBtn = ({ className, disabled }: TSubmitBtn) => {
  return (
    <button
      className={cn(
        "max-w-fit transform self-center rounded-lg bg-black px-4 py-2 text-xl text-white shadow-sm transition-transform focus:outline-none active:scale-95 disabled:bg-black/70",
        className,
      )}
      type="submit"
      disabled={disabled ?? false}
    >
      Submit
    </button>
  );
};

export default SubmitBtn;
