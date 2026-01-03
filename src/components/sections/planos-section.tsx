"use client"

import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/ui/reveal"
import { Check } from "lucide-react"

const plans = [
    {
        name: "START",
        period: "MENSAL",
        price: "135",
        cents: "00",
    },
    {
        name: "PRESS",
        period: "TRIMESTRAL",
        price: "113",
        cents: "33",
        installments: "3x",
    },
    {
        name: "CROSS",
        period: "SEMESTRAL",
        price: "99",
        cents: "00",
        installments: "6x",
        blockDays: "Bloqueio de até 35 dias",
    },
    {
        name: "LIGHT",
        period: "SEMESTRAL RECORRENTE",
        price: "102",
        cents: "19",
        note: "PARCELA DESCONTADA NO SEU CARTÃO MENSALMENTE",
    },
    {
        name: "PUMP",
        period: "ANUAL",
        price: "75",
        cents: "00",
        installments: "12x",
        schedule: "HORÁRIO INTERMEDIÁRIO\n05:00 ÀS 15:00 (SEG A QUI)\nSEX A DOM (HORÁRIO LIVRE)",
    },
    {
        name: "UP",
        period: "",
        badge: "HORÁRIO LIVRE",
        benefit: "GANHE UMA AVALIAÇÃO FÍSICA E DESCONTO EM 2 CONSULTAS NUTRICIONAIS",
        blockDays: "Bloqueio de até 100 dias",
        price: "84",
        cents: "90",
        installments: "12x",
        isSpecial: true,
    },
]

export function PlanosSection() {
    return (
        <Section id="planos" className="!bg-[#FF6B00] py-4 md:py-8">
            <div className="mx-auto max-w-md md:max-w-4xl lg:max-w-6xl px-3 md:px-6">
                {/* HEADER */}
                <Reveal className="text-center mb-3 md:mb-6">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-black italic text-white tracking-wide">
                        PLANOS DA BE
                    </h2>
                </Reveal>

                {/* GRID DE PLANOS */}
                <div className="space-y-2 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <Reveal key={index} delay={0.03 * index}>
                            <div className="overflow-hidden rounded-xl bg-white shadow-md py-2.5 md:py-4 md:h-full">
                                <div className="p-3 md:p-5 h-full flex flex-col md:py-2.5">
                                    {/* Header: Nome + Preço */}
                                    <div className="flex justify-between gap-2 mb-1.5 items-start md:mb-2.5">
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-base md:text-xl lg:text-2xl font-black italic text-[#FF6B00] leading-tight">
                                                PLANO {plan.name}
                                            </h3>
                                            <p className="text-[10px] md:text-xs lg:text-sm font-bold text-gray-800 uppercase tracking-wide leading-tight">
                                                {plan.period}
                                            </p>
                                        </div>

                                        {plan.price && (
                                            <div className="flex items-baseline gap-0.5 md:gap-1 shrink-0">
                                                {plan.installments && (
                                                    <span className="text-xs md:text-sm font-black text-white bg-[#FF6B00] rounded px-1 md:px-2 py-0.5">
                                                        {plan.installments}
                                                    </span>
                                                )}
                                                <div
                                                    className={`inline-flex items-baseline rounded-lg px-2 md:px-3 py-1 md:py-1.5 ${plan.isSpecial ? "bg-[#22D3EE]" : "bg-[#FF6B00]"
                                                        }`}
                                                >
                                                    <span className="text-[10px] md:text-sm font-black text-white">R$</span>
                                                    <span className="text-xl md:text-3xl lg:text-4xl font-black text-white leading-none">
                                                        {plan.price}
                                                    </span>
                                                    <span className="text-xs md:text-lg font-black text-white leading-none">
                                                        ,{plan.cents}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Badge (Horário Livre) */}
                                    {plan.badge && (
                                        <div className="flex items-center gap-1 mb-1 md:mb-2">
                                            <Check className="h-3 w-3 md:h-4 md:w-4 text-[#22D3EE] shrink-0" />
                                            <span className="text-[10px] md:text-xs font-bold text-gray-800 uppercase">{plan.badge}</span>
                                        </div>
                                    )}

                                    {/* Schedule (Horário Intermediário) */}
                                    {plan.schedule && (
                                        <p className="text-[9px] md:text-xs font-semibold text-gray-600 leading-tight whitespace-pre-line mb-1 md:mb-2">
                                            {plan.schedule}
                                        </p>
                                    )}

                                    {/* Benefit (Avaliação + Consultas) */}
                                    {plan.benefit && (
                                        <p className="text-[9px] md:text-xs font-semibold text-gray-600 leading-tight mb-1 md:mb-2">
                                            {plan.benefit}
                                        </p>
                                    )}

                                    {/* Block Days */}
                                    {plan.blockDays && (
                                        <div className="bg-gray-100 rounded px-2 md:px-3 py-1 md:py-1.5 mt-auto">
                                            <p className="text-[9px] md:text-xs font-bold text-gray-700 leading-tight">
                                                ✓ {plan.blockDays}
                                            </p>
                                        </div>
                                    )}

                                    {/* Note (Parcela Recorrente) */}
                                    {plan.note && (
                                        <p className="text-[9px] md:text-xs text-gray-500 leading-tight italic mt-1">{plan.note}</p>
                                    )}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Footer Note */}
                <Reveal delay={0.2} className="text-center mt-3 md:mt-6">
                    <p className="text-[10px] md:text-sm text-white/80 leading-relaxed font-medium">
                        Todos os planos incluem acesso à Musculação e Aulas Coletivas
                    </p>
                </Reveal>
            </div>
        </Section>
    )
}
