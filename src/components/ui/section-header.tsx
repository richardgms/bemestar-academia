import { cn } from "@/lib/utils"
import { Reveal } from "@/components/ui/reveal"

interface SectionHeaderProps {
    eyebrow?: string
    title: React.ReactNode
    description?: string
    className?: string
    center?: boolean
}

export function SectionHeader({
    eyebrow,
    title,
    description,
    className,
    center = true,
}: SectionHeaderProps) {
    return (
        <Reveal className={cn("mb-6 md:mb-10 lg:mb-14", center && "text-center", className)}>
            {eyebrow && (
                <span className="text-brand-accent font-black text-sm sm:text-base md:text-lg uppercase tracking-[0.15em] md:tracking-[0.2em] block mb-2 md:mb-3">
                    {eyebrow}
                </span>
            )}
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                {title}
            </h2>
            {description && (
                <p className="text-muted text-[1.05rem] sm:text-[1.18rem] md:text-[1.31rem] lg:text-[1.575rem] mt-3 md:mt-4 lg:mt-5 max-w-3xl mx-auto leading-relaxed">
                    {description}
                </p>
            )}
        </Reveal>
    )
}
