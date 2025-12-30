import React from "react"
import { cn } from "@/lib/utils"

interface CardBProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "laranja" | "branco"
    children: React.ReactNode
}

export function CardB({ variant = "laranja", children, className, ...props }: CardBProps) {
    const bgImage = variant === "laranja"
        ? "/assets/card-b-filled-laranja.svg"
        : "/assets/card-b-filled-branco.svg"

    return (
        <div
            className={cn(
                "relative aspect-square flex items-center justify-center p-8 bg-contain bg-no-repeat bg-center transition-transform hover:scale-105",
                className
            )}
            style={{ backgroundImage: `url(${bgImage})` }}
            {...props}
        >
            <div className={cn(
                "text-center relative z-10",
                variant === "laranja" ? "text-white" : "text-brand"
            )}>
                {children}
            </div>
        </div>
    )
}
