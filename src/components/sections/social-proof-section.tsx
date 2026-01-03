"use client"

import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/ui/reveal"
import { Container } from "@/components/ui/container"

const Seal10Years = () => (
    <div className="flex flex-col items-center justify-center border-2 border-brand rounded-full w-24 h-24 md:w-28 md:h-28 p-3 text-center bg-transparent shrink-0">
        <span className="text-2xl md:text-3xl font-bold text-brand leading-none">10</span>
        <span className="text-[10px] md:text-xs font-semibold text-white/80 uppercase tracking-widest mt-0.5">Anos</span>
    </div>
)

export function SocialProofSection() {
    return (
        <Section className="bg-[#222222] text-white overflow-hidden" aria-label="Prova Social">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

                    {/* COLUNA ESQUERDA: TEXTO E ESTATÍSTICAS */}
                    <Reveal className="order-1 lg:order-1">
                        <div className="flex flex-col md:flex-row items-center lg:items-start gap-6 md:gap-8 mb-10 md:mb-16">
                            <div className="flex flex-col items-center justify-center border-[3px] border-brand rounded-full w-24 h-24 md:w-32 md:h-32 p-3 md:p-4 text-center bg-transparent shrink-0 shadow-lg shadow-brand/10">
                                <span className="text-3xl md:text-4xl lg:text-5xl font-black text-brand leading-none">10</span>
                                <span className="text-[10px] md:text-xs lg:text-sm font-black text-white uppercase tracking-[0.2em] mt-1">Anos</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] text-center lg:text-left">
                                Uma década transformando{" "}
                                <span className="inline-flex items-center">
                                    <span className="text-brand italic">vidas</span>
                                    <span className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-brand-accent ml-2 shrink-0" />
                                </span>{" "}
                                em Santa Rita.
                            </h2>
                        </div>

                        <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 md:pt-12 border-t border-white/10">
                            <div className="text-center">
                                <strong className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-brand mb-1 md:mb-2 italic">20k+</strong>
                                <span className="text-white/40 text-[8px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.3em]">Seguidores</span>
                            </div>
                            <div className="text-center">
                                <strong className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-brand mb-1 md:mb-2 italic">6</strong>
                                <span className="text-white/40 text-[8px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.3em]">Modalidades</span>
                            </div>
                            <div className="text-center">
                                <strong className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-brand mb-1 md:mb-2 italic">100%</strong>
                                <span className="text-white/40 text-[8px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.3em]">Climatizada</span>
                            </div>
                        </div>
                    </Reveal>

                    {/* COLUNA DIREITA: IMAGEM */}
                    <Reveal delay={0.2} className="order-2 lg:order-2">
                        <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-square lg:aspect-[4/5] border border-white/5">
                            <img
                                src="/assets/fachada.webp"
                                alt="Fachada Bem Estar Academia"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                                <span className="bg-brand text-white text-xs font-black px-3 py-1.5 md:px-4 md:py-2 rounded-full uppercase tracking-widest shadow-xl">
                                    Nossa Casa
                                </span>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </Container>
        </Section>
    )
}
