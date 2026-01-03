"use client"

import { Section } from "@/components/layout/section"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { Dumbbell } from "lucide-react"

export function CTASection() {
    return (
        <Section className="bg-[#FF6B00] text-white text-center">
            <Container>
                <Reveal>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 md:mb-4 leading-[1.1]">
                        Bora Dar o Primeiro Passo?
                    </h2>
                </Reveal>

                <Reveal delay={0.1}>
                    <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed font-medium">
                        Agende uma aula experimental gratuita e venha conhecer a BE de perto.
                    </p>
                </Reveal>

                <Reveal delay={0.2} className="flex flex-col items-center px-4">
                    <Button size="lg" className="h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 text-base sm:text-lg md:text-xl font-black italic uppercase tracking-wider bg-white text-brand hover:bg-zinc-100 shadow-2xl shadow-black/20 w-full sm:w-auto" asChild>
                        <a
                            href={getWhatsAppLink("Oi! Vim pelo site e quero agendar minha aula experimental gratuita!")}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Agendar Aula Grátis
                        </a>
                    </Button>

                    <span className="mt-6 md:mt-8 text-white font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-lg sm:text-xl md:text-2xl flex items-center gap-2 md:gap-3">
                        Vem ser BE <Dumbbell className="w-6 h-6 md:w-8 md:h-8 stroke-[2px]" />
                    </span>
                </Reveal>
            </Container>
        </Section>
    )
}
