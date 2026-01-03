"use client"

import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/ui/reveal"
import { Highlight } from "@/components/ui/highlight"
import { Check } from "lucide-react"

export function PlanosSection() {
    return (
        <Section id="planos" className="bg-brand py-16 md:py-24">
            {/* HEADER */}
            <Reveal className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white italic tracking-tight">
                    PLANOS DA BE
                </h2>
            </Reveal>

            {/* GRID DE 3 COLUNAS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">

                {/* COLUNA 1 */}
                <Reveal delay={0.1} className="flex flex-col gap-6">
                    {/* PLANO START */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                        <h3 className="text-2xl md:text-3xl font-black text-foreground italic">PLANO START</h3>
                        <p className="text-muted font-bold text-sm uppercase tracking-wider mt-1">MENSAL</p>
                        <div className="mt-4 bg-brand rounded-xl px-4 py-3 inline-block">
                            <span className="text-white font-black text-2xl md:text-3xl">R$ 135<sup className="text-lg">,00</sup></span>
                        </div>
                    </div>

                    {/* PLANO PRESS */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                        <h3 className="text-2xl md:text-3xl font-black text-foreground italic">PLANO PRESS</h3>
                        <p className="text-muted font-bold text-sm uppercase tracking-wider mt-1">TRIMESTRAL</p>
                        <div className="mt-4 bg-brand rounded-xl px-4 py-3 inline-block">
                            <span className="text-white text-sm font-bold mr-2">3X</span>
                            <span className="text-white font-black text-2xl md:text-3xl">R$ 113<sup className="text-lg">,33</sup></span>
                        </div>
                    </div>
                </Reveal>

                {/* COLUNA 2 */}
                <Reveal delay={0.2} className="flex flex-col gap-6">
                    {/* PLANO CROSS */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                        <h3 className="text-2xl md:text-3xl font-black text-foreground italic">PLANO CROSS</h3>
                        <p className="text-muted font-bold text-sm uppercase tracking-wider mt-1">SEMESTRAL</p>
                        <div className="mt-4 bg-brand rounded-xl px-4 py-3 inline-block">
                            <span className="text-white text-sm font-bold mr-2">6X</span>
                            <span className="text-white font-black text-2xl md:text-3xl">R$ 99<sup className="text-lg">,00</sup></span>
                        </div>
                        <p className="text-muted-light text-[10px] mt-3 text-center tracking-wide">
                            (Bloqueio de até 35 dias)
                        </p>
                    </div>

                    {/* PLANO LIGHT */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                        <h3 className="text-2xl md:text-3xl font-black text-foreground italic">PLANO LIGHT</h3>
                        <p className="text-muted font-bold text-sm uppercase tracking-wider mt-1">SEMESTRAL RECORRENTE</p>
                        <div className="mt-4 bg-brand rounded-xl px-4 py-3 inline-block">
                            <span className="text-white font-black text-2xl md:text-3xl">R$ 102<sup className="text-lg">,19</sup></span>
                        </div>
                        <p className="text-muted text-xs mt-4 text-center uppercase tracking-wide">
                            Parcela descontada no<br />seu cartão mensalmente
                        </p>
                    </div>
                </Reveal>

                {/* COLUNA 3 */}
                <Reveal delay={0.3} className="flex flex-col gap-6">
                    {/* PLANO PUMP */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                        <h3 className="text-2xl md:text-3xl font-black text-foreground italic">PLANO PUMP</h3>
                        <p className="text-muted font-bold text-sm uppercase tracking-wider mt-1">ANUAL</p>
                        <p className="text-muted text-xs mt-2 text-center uppercase tracking-wide leading-relaxed">
                            Horário Intermediário<br />
                            05:00 às 15:00 (Seg a Qui)<br />
                            Sex a Dom (Horário Livre)
                        </p>
                        <div className="mt-4 bg-brand rounded-xl px-4 py-3 inline-block">
                            <span className="text-white text-sm font-bold mr-2">12X</span>
                            <span className="text-white font-black text-2xl md:text-3xl">R$ 75<sup className="text-lg">,00</sup></span>
                        </div>
                    </div>

                    {/* PLANO UP */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                        <h3 className="text-2xl md:text-3xl font-black text-foreground italic">PLANO UP</h3>
                        <div className="flex items-center justify-center gap-2 mt-1">
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-foreground font-bold text-sm uppercase tracking-wider">Horário Livre</span>
                        </div>
                        <p className="text-muted text-xs mt-2 text-center uppercase tracking-wide leading-relaxed">
                            Ganhe uma avaliação física e<br />
                            desconto em 2 consultas<br />
                            nutricionais
                        </p>
                        <p className="text-muted-light text-[10px] mt-2 text-center tracking-wide">
                            (Bloqueio de até 100 dias)
                        </p>
                        <div className="mt-4 bg-brand rounded-xl px-4 py-3 inline-block">
                            <span className="text-white text-sm font-bold mr-2">12X</span>
                            <span className="text-white font-black text-2xl md:text-3xl">R$ 84<sup className="text-lg">,90</sup></span>
                        </div>
                    </div>
                </Reveal>
            </div>
        </Section>
    )
}
