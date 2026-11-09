import type { ComponentProps } from "react";
import { cn } from "../../lib/cn";

type CardVariant = "outline" | "filled" | "elevated";
type CardSize = "sm" | "md" | "lg";

const VARIANTS: Record<CardVariant, string> = {
  outline: "border-2 border-border bg-white",
  filled: "bg-slate-100",
  elevated: "bg-white shadow-lg",
};

const SIZES: Record<CardSize, string> = {
  sm: "w-60 p-3",
  md: "w-72 p-4",
  lg: "w-80 p-6",
};

export interface CardProps extends ComponentProps<"div"> {
  variant?: CardVariant;
  size?: CardSize;
}

export function Card({
  variant = "outline",
  size = "md",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-card",
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
