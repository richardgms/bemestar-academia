"use client"

import { Section } from "@/components/layout/section"
import { Container } from "@/components/ui/container"
import { Reveal } from "@/components/ui/reveal"
import { Highlight } from "@/components/ui/highlight"
import { Button } from "@/components/ui/button"
import { getWhatsAppLink, mensagens } from "@/lib/whatsapp"

export function CtaIntermediarioSection() {
    return (
        <Section className="bg-zinc-950 text-white border-y-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand/10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand/20 via-transparent to-transparent pointer-events-none" />
            <Container>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">
                    <Reveal className="max-w-3xl text-center lg:text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 md:mb-6 leading-tight">
                            Quer conhecer <Highlight>na prática</Highlight>?
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed font-medium">
                            Agende uma aula experimental e sente a energia da BE.
                            Sem compromisso, só pra você sentir a diferença de verdade.
                        </p>
                    </Reveal>

                    <Reveal delay={0.2} className="shrink-0 w-full sm:w-auto">
                        <Button
                            className="bg-brand text-white hover:bg-brand-hover text-base sm:text-lg md:text-xl h-14 md:h-16 lg:h-20 px-8 md:px-10 lg:px-14 rounded-xl md:rounded-2xl font-black italic uppercase tracking-widest shadow-2xl shadow-brand/20 hover:-translate-y-2 transition-all duration-300 w-full sm:w-auto"
                            asChild
                        >
                            <a
                                href={getWhatsAppLink(mensagens.aulaExperimental)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Agendar Aula Grátis
                            </a>
                        </Button>
                    </Reveal>
                </div>
            </Container>
        </Section>
    )
}
