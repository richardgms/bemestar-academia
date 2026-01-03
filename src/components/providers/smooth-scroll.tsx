"use client"

import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        // Detectar se é dispositivo mobile
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        const lenis = new Lenis({
            duration: isMobile ? 0.8 : 1.0, // Mais rápido em mobile
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: !isMobile, // Desabilitar smooth em mobile
            touchMultiplier: 2,
            lerp: 0.1, // Interpolação suave
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return <>{children}</>
}
