import type { ReactNode } from "react";

type ChipVariant =
  | "default"
  | "muted"
  | "wa"
  | "ig"
  | "mail"
  | "warning"
  | "success";

type ChipProps = {
  children: ReactNode;
  variant?: ChipVariant;
  className?: string;
};

const variantClasses: Record<ChipVariant, string> = {
  default: "bg-white/5 text-zinc-300",
  muted: "bg-white/5 text-zinc-400",
  wa: "bg-emerald-500/10 text-emerald-300",
  ig: "bg-fuchsia-500/10 text-fuchsia-300",
  mail: "bg-cyan-500/10 text-cyan-300",
  warning: "bg-amber-500/10 text-amber-300",
  success: "bg-emerald-500/10 text-emerald-300",
};

export default function Chip({
  children,
  variant = "default",
  className = "",
}: ChipProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}