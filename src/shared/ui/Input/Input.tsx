import type { ComponentProps } from "react";
import { cn } from "../../lib/cn";

type InputSize = "sm" | "md" | "lg";
type InputStatus = "neutral" | "success" | "danger";

const SIZES: Record<InputSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4",
  lg: "h-12 px-6 text-lg",
};

const STATUSES: Record<InputStatus, string> = {
  neutral: "border-border",
  success: "border-success-600",
  danger: "border-danger-500 bg-danger-50 text-danger-500",
};

export interface InputProps extends Omit<ComponentProps<"input">, "size"> {
  label?: string;
  size?: InputSize;
  status?: InputStatus;
  fullWidth?: boolean;
}

export function Input({
  label,
  size = "md",
  status = "neutral",
  fullWidth = false,
  type = "text",
  className,
  ...props
}: InputProps) {
  return (
    <label
      className={cn(
        "flex flex-col gap-1 text-sm font-medium",
        status === "danger" && "text-danger-500",
        fullWidth && "w-full",
      )}
    >
      {label}
      <input
        type={type}
        aria-invalid={status === "danger"}
        className={cn(
          "rounded-control border-2 bg-white font-normal transition",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
          "disabled:cursor-not-allowed disabled:opacity-50",
          STATUSES[status],
          SIZES[size],
          className,
        )}
        {...props}
      />
    </label>
  );
}
