"use client"

import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/ui/reveal"
import { Highlight } from "@/components/ui/highlight"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { planos } from "@/lib/data"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { Check, Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function PlanosSection() {
    return (
        <Section id="planos" className="bg-white">
            {/* HEADER */}
            <SectionHeader
                eyebrow="PLANOS"
                title={<>Comece Sua <Highlight>Transformação</Highlight></>}
                description="Escolha o plano que combina com você. Aqui não tem pegadinha."
                className="max-w-3xl mx-auto"
            />

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 max-w-6xl mx-auto items-stretch">
                {planos.map((plano: any, index: number) => {
                    const isDestaque = plano.destaque

                    return (
                        <Reveal key={index} delay={0.2 + (index * 0.1)} className="h-full">
                            <div
                                className={cn(
                                    "relative rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-14 border transition-all duration-500 h-full flex flex-col",
                                    isDestaque
                                        ? "bg-white border-brand shadow-2xl shadow-brand/20 md:scale-105 z-10"
                                        : "bg-zinc-50 border-border hover:border-brand/30 hover:shadow-xl"
                                )}
                            >
                                {/* Background Decoration for Destaque */}
                                {isDestaque && (
                                    <div className="absolute inset-0 z-0 overflow-hidden rounded-[2.5rem] pointer-events-none">
                                        <img
                                            src="/assets/card-b-filled-laranja.svg"
                                            className="absolute -right-20 -bottom-20 w-80 h-80 opacity-10"
                                            alt=""
                                        />
                                    </div>
                                )}

                                {/* Badge */}
                                {plano.badge && (
                                    <div className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 bg-brand text-white px-4 py-1.5 md:px-8 md:py-2.5 rounded-full font-black text-xs md:text-base shadow-xl uppercase tracking-widest flex items-center gap-2">
                                        <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                                        {plano.badge}
                                    </div>
                                )}

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="text-center mb-6 md:mb-10">
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-2 md:mb-4">
                                            {plano.nome}
                                        </h3>
                                        <p className="text-muted text-base md:text-lg font-medium">
                                            {plano.descricao}
                                        </p>
                                    </div>

                                    {/* Beneficios */}
                                    <ul className="space-y-3 md:space-y-5 mb-8 md:mb-12 flex-1">
                                        {plano.beneficios.map((item: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3 md:gap-4 text-sm sm:text-base md:text-xl text-foreground font-medium">
                                                <span className={cn(
                                                    "w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm",
                                                    isDestaque ? "bg-brand/10 text-brand" : "bg-brand-accent/10 text-brand-accent"
                                                )}>
                                                    <Check className="w-3 h-3 md:w-4 md:h-4" strokeWidth={4} />
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <Button
                                        variant={isDestaque ? "default" : "outline"}
                                        size="lg"
                                        className={cn(
                                            "w-full h-14 md:h-16 lg:h-20 text-base md:text-lg lg:text-xl font-black italic uppercase tracking-widest",
                                            !isDestaque && "border-2 border-brand text-brand hover:bg-brand hover:text-white"
                                        )}
                                        asChild
                                    >
                                        <a
                                            href={getWhatsAppLink(plano.mensagemWhatsapp)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {plano.cta}
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </Reveal>
                    )
                })}
            </div>

            <Reveal delay={0.4} className="text-center mt-12">
                <p className="text-sm text-muted">
                    Sem fidelidade forçada. Aqui você fica porque quer. 🧡
                </p>
            </Reveal>
        </Section>
    )
}
