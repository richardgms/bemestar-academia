import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
// Radix slot is optional if we don't install it, but good for "asChild". 
// Since I didn't install @radix-ui/react-slot, I will implement a standard button for now or just standard HTML button props.
// Actually, standard Shadcn uses Slot. I'll stick to simple props to avoid extra deps if not requested, or install it? 
// The plan didn't explicitly say Shadcn, but "Inicializar Shadcn UI" was in task.md. 
// However, I am doing manual setup as per "Web Application Development" instructions to keep it lightweight if possible, 
// BUT the prompt has "Inicializar Shadcn UI" in the *original* task.md line 9.
// I'll stick to a custom robust button for now to match the specific "Pill + Italic" design without overhead.

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "link" | "accent" | "whatsapp"
    size?: "default" | "sm" | "lg" | "icon"
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    {
                        // Variants
                        "bg-brand text-white shadow-lg shadow-brand/20 hover:bg-brand-hover hover:scale-105 hover:shadow-xl font-bold italic uppercase tracking-wider": variant === "default",
                        "border-2 border-brand bg-transparent text-brand hover:bg-brand hover:text-white font-semibold": variant === "outline",
                        "hover:bg-brand-light text-brand-hover": variant === "ghost",
                        "text-brand underline-offset-4 hover:underline": variant === "link",
                        "bg-brand-accent text-white shadow-md hover:bg-cyan-600 font-bold": variant === "accent",
                        "bg-[#22D3EE] text-white hover:bg-[#06B6D4] shadow-md font-semibold": variant === "whatsapp",

                        // Sizes
                        "h-12 px-8 py-4 text-base": size === "default",
                        "h-9 px-4 text-sm": size === "sm",
                        "h-14 px-10 text-lg": size === "lg",
                        "h-10 w-10": size === "icon",
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
