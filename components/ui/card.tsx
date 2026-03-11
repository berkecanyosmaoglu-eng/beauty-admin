import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function Card({
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-[22px] border border-white/6 bg-white/5 shadow-[0_10px_24px_rgba(0,0,0,0.16)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}