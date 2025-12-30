"use client"

import { getWhatsAppLink } from "@/lib/whatsapp"
import { MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function WhatsAppFloat() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    href={getWhatsAppLink("Olá! Gostaria de saber mais sobre a Bem Estar.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center text-white shadow-lg shadow-green-900/20 hover:bg-[#128C7E] transition-colors"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {/* Ping animation wrapper */}
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-20 animate-ping" />

                    <MessageCircle className="w-7 h-7 relative z-10" fill="currentColor" />
                </motion.a>
            )}
        </AnimatePresence>
    )
}
