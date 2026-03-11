import type { InputHTMLAttributes } from "react";
import { Search } from "lucide-react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  withSearchIcon?: boolean;
  wrapperClassName?: string;
};

export default function Input({
  withSearchIcon = false,
  className = "",
  wrapperClassName = "",
  ...props
}: InputProps) {
  return (
    <div
      className={`flex h-10 items-center rounded-2xl border border-white/6 bg-[#0a1320] px-3 ${wrapperClassName}`}
    >
      {withSearchIcon ? <Search size={15} className="text-zinc-500" /> : null}
      <input
        className={`${withSearchIcon ? "ml-2" : ""} w-full bg-transparent text-[14px] text-white outline-none placeholder:text-zinc-500 ${className}`}
        {...props}
      />
    </div>
  );
}