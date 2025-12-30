import React from "react"
import { cn } from "@/lib/utils"

interface OSticadoProps {
    variant?: "laranja" | "branco"
    className?: string
}

export function OSticado({ variant = "laranja", className }: OSticadoProps) {
    const src = variant === "laranja"
        ? "/assets/o-esticado-laranja.svg"
        : "/assets/o-esticado-branco.svg"

    return (
        <img
            src={src}
            alt="O"
            className={cn("inline-block h-[0.85em] vertical-middle mx-[0.05em] translate-y-[-0.05em]", className)}
        />
    )
}

/**
 * Utilitário para renderizar texto substituindo o "O" maiúsculo pelo componente OSticado
 */
export function HeadingWithO({
    children,
    variant = "laranja",
    className,
    ...props
}: {
    children: string,
    variant?: "laranja" | "branco",
    className?: string
} & React.HTMLAttributes<HTMLHeadingElement>) {

    const parts = children.split(/O/g)

    return (
        <h2 className={cn("font-bold uppercase italic", className)} {...props}>
            {parts.map((part, i) => (
                <React.Fragment key={i}>
                    {part}
                    {i < parts.length - 1 && <OSticado variant={variant} />}
                </React.Fragment>
            ))}
        </h2>
    )
}
