"use client"

import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import { SmoothScroll } from './smooth-scroll'

export function Providers({ children }: { children: ReactNode }) {
    return (
        <SmoothScroll>
            {children}
            <Toaster position="bottom-right" richColors closeButton />
        </SmoothScroll>
    )
}
