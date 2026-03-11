import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "wa"
  | "ig"
  | "mail";

type ButtonSize = "sm" | "md";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-[#08111d] shadow-[0_8px_22px_rgba(255,255,255,0.08)] hover:opacity-95",
  secondary:
    "border border-white/8 bg-white/5 text-white hover:bg-white/10",
  ghost:
    "bg-transparent text-zinc-300 hover:bg-white/5",
  wa: "bg-gradient-to-br from-emerald-400 to-emerald-500 text-[#041018] hover:opacity-90",
  ig: "bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400 text-white hover:opacity-90",
  mail: "bg-gradient-to-br from-cyan-500 to-blue-500 text-white hover:opacity-90",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-[12px] rounded-xl",
  md: "h-10 px-4 text-[13px] rounded-2xl",
};

export default function Button({
  children,
  variant = "secondary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 font-medium transition ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}