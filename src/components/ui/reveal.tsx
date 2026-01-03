"use client"

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
    children: ReactNode
    className?: string
    delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
    const shouldReduceMotion = useReducedMotion();
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    // Durante SSR e antes da hidratação, renderiza sem animação
    if (!isHydrated) {
        return <div className={cn(className)}>{children}</div>;
    }

    return (
        <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
            transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className={cn(className)}
            style={{ willChange: 'opacity, transform' }}
        >
            {children}
        </motion.div>
    )
}
