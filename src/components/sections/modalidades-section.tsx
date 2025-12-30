"use client"

import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/ui/reveal"
import { Highlight } from "@/components/ui/highlight"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { CardB } from "@/components/ui/card-b"
import { modalidades } from "@/lib/data"
import { Music, Dumbbell, Bike, Sparkles, Users, Flame, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

// Mapping icons from string to component
const ICON_MAP: Record<string, LucideIcon> = {
    Music: Music,
    Dumbbell: Dumbbell,
    Bike: Bike,
    Sparkles: Sparkles,
    Users: Users,
    Flame: Flame,
}

export function ModalidadesSection() {
    return (
        <Section id="modalidades" className="bg-white">
            {/* HEADER */}
            <SectionHeader
                eyebrow="AULAS COLETIVAS"
                title={<>Encontre Seu <Highlight>Treino Ideal</Highlight></>}
                description="Aulas pra todos os gostos e objetivos — e com professores que conhecem você pelo nome."
                className="max-w-4xl mx-auto"
            />

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 mb-12 md:mb-20">
                {modalidades.map((mod, index) => {
                    const Icon = ICON_MAP[mod.icone as string] || Dumbbell
                    const color = mod.cor || "#FF6B00"

                    return (
                        <Reveal key={index} delay={0.1 + (index * 0.05)}>
                            <div
                                className="group relative bg-background rounded-[2.5rem] overflow-hidden border border-border hover:shadow-2xl hover:border-brand/30 transition-all duration-500 h-full flex flex-col"
                            >
                                {/* Top Border/Gradient */}
                                <div
                                    className="h-2.5 w-full"
                                    style={{ background: `linear-gradient(90deg, ${mod.corGradient[0]}, ${mod.corGradient[1]})` }}
                                />

                                <div className="p-6 md:p-8 lg:p-12 flex flex-col flex-1">
                                    <div className="flex items-start justify-between mb-4 md:mb-8">
                                        {/* Icon Box */}
                                        <div
                                            className="w-14 h-14 md:w-16 lg:w-20 md:h-16 lg:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm"
                                            style={{ backgroundColor: `${color}15` }}
                                        >
                                            <Icon className="w-7 h-7 md:w-8 lg:w-10 md:h-8 lg:h-10" style={{ color: color }} />
                                        </div>

                                        <span className="px-3 py-1 md:px-4 md:py-1.5 bg-zinc-100 text-zinc-600 rounded-full text-xs md:text-sm font-bold shadow-sm">
                                            {mod.duracao}
                                        </span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-foreground mb-2 md:mb-4 group-hover:text-brand transition-colors">
                                        {mod.nome}
                                    </h3>

                                    <p className="text-muted leading-relaxed mb-4 md:mb-8 flex-1 text-base md:text-lg">
                                        {mod.descricao}
                                    </p>

                                    <a
                                        href="#horarios"
                                        className="inline-flex items-center text-sm md:text-base font-black uppercase tracking-widest hover:translate-x-2 transition-transform duration-300 underline-offset-8 decoration-2 hover:underline"
                                        style={{ color: color }}
                                    >
                                        Ver Horários
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    )
                })}
            </div>

            {/* CTA Footer of Section */}
            <Reveal delay={0.4} className="text-center">
                <p className="text-muted mb-6">
                    Não sabe qual escolher? Experimente todas!
                </p>
                <Button variant="outline" asChild className="border-brand text-brand hover:bg-brand hover:text-white">
                    <a href="#horarios">
                        Ver Grade Completa
                    </a>
                </Button>
            </Reveal>
        </Section>
    )
}
