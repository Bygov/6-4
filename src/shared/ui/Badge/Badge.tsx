import type { ComponentProps } from "react";
import { cn } from "../../lib/cn";

type BadgeVariant = 'neutral' | 'success' | 'danger'
type BadgeSize = 'sm' | 'md' | 'lg'

const VARIANTS: Record<BadgeVariant, string> = {
    neutral: 'bg-slate-100 text-foreground',
    success: 'bg-success-50 text-success-600',
    danger: 'bg-danger-50 text-danger-500'
}

const SIZES: Record<BadgeSize, string> = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6'
}

export interface BadgeProps extends ComponentProps<'span'> {
    variant?: BadgeVariant
    size?: BadgeSize
}

export function Badge({
    variant = 'neutral',
    size = 'md',
    className,
    children,
    ...props
}: BadgeProps) {

    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full font-medium',
                VARIANTS[variant],
                SIZES[size],
                className
            )}
            {...props}
        >
            {children}
        </span>
    )
}