import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "outline" | "accent" | "anniversary"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                {
                    "border-transparent bg-brand text-white shadow hover:bg-brand-hover": variant === "default",
                    "border-brand text-brand": variant === "outline",
                    "border-transparent bg-brand-accent text-white hover:bg-cyan-600": variant === "accent",
                    "border-transparent bg-gradient-to-r from-brand to-red-600 text-white font-stretch italic uppercase tracking-widest px-4 py-1": variant === "anniversary",
                },
                className
            )}
            {...props}
        />
    )
}
