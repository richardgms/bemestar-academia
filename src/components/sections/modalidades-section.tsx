"use client"

import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/ui/reveal"
import { Highlight } from "@/components/ui/highlight"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { modalidades } from "@/lib/data"
import { Music, Dumbbell, Bike, Sparkles, Users, Flame, LucideIcon } from "lucide-react"
import { useRef, useState, useEffect } from "react"

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
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    // Update active indicator on scroll
    useEffect(() => {
        const container = scrollContainerRef.current
        if (!container) return

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft
            const cardWidth = container.scrollWidth / modalidades.length
            const newIndex = Math.round(scrollLeft / cardWidth)
            setActiveIndex(newIndex)
        }

        container.addEventListener("scroll", handleScroll)
        return () => container.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToCard = (index: number) => {
        const container = scrollContainerRef.current
        if (container) {
            const cardWidth = container.scrollWidth / modalidades.length
            container.scrollTo({
                left: cardWidth * index,
                behavior: "smooth",
            })
        }
    }

    return (
        <Section id="modalidades" className="bg-white">
            {/* HEADER */}
            <SectionHeader
                eyebrow="AULAS COLETIVAS"
                title={<>Encontre Seu <Highlight>Treino Ideal</Highlight></>}
                description="Aulas pra todos os gostos e objetivos — e com professores que conhecem você pelo nome."
                className="max-w-4xl mx-auto"
            />

            {/* MOBILE: Horizontal Carousel */}
            <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 md:hidden -mx-4 px-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {modalidades.map((mod, index) => {
                    const Icon = ICON_MAP[mod.icone as string] || Dumbbell
                    const color = mod.cor || "#FF6B00"

                    return (
                        <div key={index} className="flex-none w-[85vw] snap-center">
                            <ModalidadeCard mod={mod} Icon={Icon} color={color} />
                        </div>
                    )
                })}
            </div>

            {/* Mobile Scroll Indicators */}
            <div className="flex justify-center gap-2 mt-4 mb-8 md:hidden">
                {modalidades.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index
                            ? "bg-brand w-6"
                            : "bg-muted hover:bg-brand/50"
                            }`}
                        onClick={() => scrollToCard(index)}
                        aria-label={`Ir para card ${index + 1}`}
                    />
                ))}
            </div>

            {/* DESKTOP: Grid Layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 mb-12 md:mb-20">
                {modalidades.map((mod, index) => {
                    const Icon = ICON_MAP[mod.icone as string] || Dumbbell
                    const color = mod.cor || "#FF6B00"

                    return (
                        <Reveal key={index} delay={0.1 + (index * 0.05)}>
                            <ModalidadeCard mod={mod} Icon={Icon} color={color} />
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

// Componente de Card extraído para reutilização
interface ModalidadeCardProps {
    mod: typeof modalidades[0]
    Icon: LucideIcon
    color: string
}

function ModalidadeCard({ mod, Icon, color }: ModalidadeCardProps) {
    return (
        <div className="group relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 h-full flex flex-col">
            {/* Top Border */}
            <div className="h-2.5 w-full bg-[#FF6B00] shrink-0" />

            <div className="p-5 md:p-8 lg:p-12 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4 md:mb-8">
                    {/* Icon Box */}
                    <div
                        className="w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20 rounded-xl md:rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm"
                        style={{ backgroundColor: `${color}15` }}
                    >
                        <Icon className="w-6 h-6 md:w-8 lg:w-10 md:h-8 lg:h-10" style={{ color: color }} />
                    </div>

                    <span className="px-3 py-1 md:px-4 md:py-1.5 bg-zinc-100 text-zinc-600 rounded-full text-xs md:text-sm font-bold shadow-sm">
                        {mod.duracao}
                    </span>
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-foreground mb-2 md:mb-4 group-hover:text-brand transition-colors">
                    {mod.nome}
                </h3>

                <p className="text-muted leading-relaxed mb-4 md:mb-8 flex-1 text-sm md:text-lg">
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
    )
}
