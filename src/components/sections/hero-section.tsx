"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { Highlight } from "@/components/ui/highlight"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
    return (
        <section id="inicio" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-8 md:pt-10">
            {/* BACKGROUND IMAGE + OVERLAY */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/hero-bg.webp"
                    alt="Academia Bem Estar"
                    className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60" />
            </div>

            {/* CONTENT */}
            <Container className="relative z-10 text-center h-[calc(100vh-56px)] md:h-[calc(100vh-128px)] flex flex-col justify-evenly md:justify-center pb-12 md:pb-8 max-[400px]:min-h-[100svh] max-[400px]:h-auto max-[400px]:justify-start max-[400px]:gap-6 max-[400px]:pt-8 max-[400px]:pb-24">
                <Reveal>
                    <div className="inline-block px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-2 md:mb-4">
                        <span className="text-brand font-bold tracking-wider text-sm uppercase">10 anos transformando vidas</span>
                    </div>
                </Reveal>

                <Reveal delay={0.1}>
                    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-8xl font-extrabold text-white leading-[1.2] md:leading-[1.1] tracking-tight max-w-6xl mx-auto mb-2 md:mb-4">
                        TREINE NO <Highlight>CONFORTO</Highlight> QUE <span className="whitespace-nowrap text-[1.56em] md:text-[1em]">V<img src="/assets/o-esticado-branco.svg" alt="O" className="inline-block h-[0.90em] w-auto mx-[-0.02em] align-middle translate-y-[-0.12em]" />CÊ</span> <span className="text-[1.25em] md:text-[1em]">MERECE<span className="text-brand-accent">.</span></span>
                    </h1>
                </Reveal>

                <Reveal delay={0.2}>
                    <p className="text-[1.31rem] sm:text-[1.57rem] md:text-[1.57rem] text-gray-200 max-w-4xl md:max-w-3xl mx-auto leading-snug md:leading-relaxed font-medium px-4 md:px-2 mb-4 md:mb-8">
                        Estrutura premium, ambiente <strong className="text-white">100% climatizado</strong> e acompanhamento real.
                        Transforme sua rotina na melhor academia de <strong className="text-white">Santa Rita PB</strong> há 10 anos.
                    </p>
                </Reveal>

                <Reveal delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 px-0 sm:px-4 w-full">
                    <Button size="lg" className="w-full sm:w-auto h-16 sm:h-16 md:h-15 px-6 sm:px-8 md:px-10 text-lg sm:text-lg md:text-lg font-black italic uppercase tracking-wider shadow-brand/40 shadow-2xl" asChild>
                        <a
                            href={getWhatsAppLink("Olá! Gostaria de agendar minha aula experimental gratuita.")}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            AGENDAR AULA GRÁTIS
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto h-16 sm:h-16 md:h-15 px-6 sm:px-8 md:px-10 text-lg sm:text-lg md:text-lg font-bold border-white text-white hover:bg-white hover:text-brand transition-all" asChild>
                        <a href="#horarios">
                            Ver Horários
                        </a>
                    </Button>
                </Reveal>
            </Container>

            {/* SCROLL INDICATOR */}
            <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <ChevronDown className="w-10 h-10" />
            </motion.div>
        </section>
    )
}
