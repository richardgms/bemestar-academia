"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/ui/reveal"
import { Highlight } from "@/components/ui/highlight"
import { SectionHeader } from "@/components/ui/section-header"
import { horarios } from "@/lib/data"
import { cn } from "@/lib/utils"

// Tabs Components (Inline wrapper for style)
const Tabs = TabsPrimitive.Root
const TabsList = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.List
        ref={ref}
        className={cn(
            "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
            "inline-flex items-center justify-center overflow-x-auto no-scrollbar rounded-full bg-zinc-100 p-1 text-muted-foreground",
            className
        )}
        {...props}
    />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger
        ref={ref}
        className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-brand data-[state=active]:text-white data-[state=active]:shadow-md hover:text-brand data-[state=active]:hover:text-white",
            className
        )}
        {...props}
    />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Content
        ref={ref}
        className={cn(
            "mt-8 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-full max-w-3xl mx-auto",
            className
        )}
        {...props}
    />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

import { ChevronLeft, ChevronRight } from "lucide-react"

export function HorariosSection() {
    const days = Object.entries(horarios)
    const [activeTab, setActiveTab] = React.useState("segunda")

    // Define o dia atual ao carregar
    React.useEffect(() => {
        const diasSemana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"]
        const hoje = new Date().getDay()
        const diaNome = diasSemana[hoje]

        // Se for domingo, mantém segunda como padrão, senão usa o dia atual
        if (diaNome !== "domingo" && horarios[diaNome as keyof typeof horarios]) {
            setActiveTab(diaNome)
        }
    }, [])

    const currentIndex = days.findIndex(([key]) => key === activeTab)

    const nextDay = () => {
        const nextIndex = (currentIndex + 1) % days.length
        setActiveTab(days[nextIndex][0])
    }

    const prevDay = () => {
        const prevIndex = (currentIndex - 1 + days.length) % days.length
        setActiveTab(days[prevIndex][0])
    }

    return (
        <Section id="horarios" className="bg-zinc-50/50">
            {/* HEADER */}
            <SectionHeader
                eyebrow="PROGRAMAÇÃO"
                title={<>Horários das <Highlight>Aulas</Highlight></>}
                description="Escolha o melhor momento pra treinar. A gente te espera!"
                className="mb-6 md:mb-10"
            />

            <Reveal delay={0.2} className="flex justify-center">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    {/* NAVEGAÇÃO MOBILE (SETAS) */}
                    <div className="flex md:hidden items-center justify-between bg-zinc-200/50 rounded-full p-1 mb-6 max-w-[280px] mx-auto">
                        <button
                            onClick={prevDay}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm text-brand"
                            aria-label="Dia anterior"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <span className="font-black text-brand uppercase tracking-widest text-sm">
                            {days[currentIndex][1].label}
                        </span>

                        <button
                            onClick={nextDay}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm text-brand"
                            aria-label="Próximo dia"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* NAVEGAÇÃO DESKTOP (TABS PADRÃO) */}
                    <div className="hidden md:block overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 pb-2">
                        <TabsList className="mb-4 md:mb-6 h-12 md:h-16 lg:h-18 p-1 md:p-1.5 lg:p-2 bg-zinc-200/50 w-max md:w-fit mx-auto flex border-none">
                            {days.map(([key, day]) => (
                                <TabsTrigger
                                    key={key}
                                    value={key}
                                    className="flex-shrink-0 px-3 sm:px-4 md:px-6 lg:px-8 text-sm sm:text-base md:text-lg font-bold data-[state=active]:bg-brand data-[state=active]:text-white shadow-none data-[state=active]:shadow-xl data-[state=active]:shadow-brand/20"
                                >
                                    {day.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {days.map(([key, day]) => (
                        <TabsContent key={key} value={key} className="mt-0 md:mt-8 w-full max-w-4xl mx-auto">
                            <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl md:shadow-2xl shadow-zinc-200/50 border border-border/50">
                                {Object.entries(day.periodos).map(([periodo, aulas], pIndex) => (
                                    <div key={periodo} className={cn(pIndex > 0 && "mt-6 md:mt-10 pt-6 md:pt-10 border-t border-brand-accent/20")}>
                                        <h3 className="text-xs sm:text-sm md:text-base font-black text-brand-accent uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                                            <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-brand-accent" />
                                            Período da {periodo}
                                        </h3>

                                        <div className="space-y-2 md:space-y-3">
                                            {aulas.map((aula: any, i: number) => (
                                                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 md:py-4 group hover:bg-brand-light rounded-xl md:rounded-2xl px-3 md:px-6 -mx-1 md:-mx-2 transition-all duration-300 border border-transparent hover:border-brand/10">
                                                    <div className="flex items-center gap-3 md:gap-6">
                                                        <span className="text-brand font-black font-mono text-base sm:text-lg md:text-xl lg:text-2xl bg-brand-light px-2 sm:px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl min-w-[70px] md:min-w-[90px] text-center shadow-sm">
                                                            {aula.hora}
                                                        </span>
                                                        <div>
                                                            <strong className="text-foreground text-base sm:text-lg md:text-xl block group-hover:text-brand transition-colors font-extrabold">
                                                                {aula.aula}
                                                            </strong>
                                                            <span className="text-xs sm:text-sm md:text-base text-muted/80">
                                                                com Prof. {aula.professor}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="hidden sm:flex items-center gap-2 md:gap-3 text-[10px] md:text-xs text-brand-accent font-black uppercase tracking-widest">
                                                        <span className="inline-block w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-brand-accent" />
                                                        Disponível
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {(!day.periodos || Object.keys(day.periodos).length === 0) && (
                                    <div className="text-center py-10 text-muted">
                                        <p>Sem aulas coletivas neste dia. A musculação segue aberta normalmente!</p>
                                    </div>
                                )}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </Reveal>
        </Section>
    )
}
