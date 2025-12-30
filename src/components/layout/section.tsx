import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean
}

export function Section({ className, container = true, children, ...props }: SectionProps) {
    return (
        <section
            className={cn(
                "py-10 md:py-12 lg:py-16",
                className
            )}
            {...props}
        >
            {container ? <Container>{children}</Container> : children}
        </section>
    )
}
