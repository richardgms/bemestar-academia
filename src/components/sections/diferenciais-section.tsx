import Image from "next/image"
import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/ui/reveal"
import { Container } from "@/components/ui/container"
import { Highlight } from "@/components/ui/highlight"
import { SectionHeader } from "@/components/ui/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Heart, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const FEATURES = [
    {
        icon: Dumbbell,
        title: "Estrutura Completa",
        description: "A única academia 100% climatizada de Santa Rita com equipamentos de ponta e espaço pensado para sua performance.",
        colSpan: "md:col-span-2",
        bgImage: "/assets/estrutura.webp"
    },
    {
        icon: Heart,
        title: "Comunidade",
        description: "Ambiente acolhedor onde todo mundo sabe seu nome. Você não é só um número.",
        colSpan: "md:col-span-1",
        bgImage: null
    },
    {
        icon: TrendingUp,
        title: "Acompanhamento",
        description: "Time focado na sua evolução constante. Celebramos cada conquista juntos.",
        colSpan: "md:col-span-1",
        bgImage: null
    },
    {
        icon: CheckCircle,
        title: "All-in-One",
        description: "Musculação, aulas coletivas, estacionamento e conforto. Tudo incluso no seu plano.",
        colSpan: "md:col-span-2",
        bgImage: null
    }
]

export function DiferenciaisSection() {
    return (
        <Section id="diferenciais" className="bg-white">
            <Container>
                {/* HEADER MINIMALISTA */}
                <SectionHeader
                    eyebrow="A EXPERIÊNCIA BE"
                    title={<>O padrão que você <Highlight>merece</Highlight>.</>}
                    description="Elevamos o nível do treino com uma estrutura premium e atendimento humanizado. Sem taxas escondidas."
                    className="max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16"
                    center
                />

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 auto-rows-[280px] sm:auto-rows-[320px] md:auto-rows-[300px]">
                    {FEATURES.map((feature, index) => (
                        <Reveal
                            key={index}
                            delay={index * 0.1}
                            className={cn("h-full", feature.colSpan)}
                        >
                            <Card className={cn(
                                "group relative h-full overflow-hidden transition-all duration-500 flex flex-col rounded-xl shadow-md border-0",
                                // Featured Card (Image) styling overrides
                                feature.bgImage ? "" : "bg-white"
                            )}>
                                {/* Top Border (Standard Cards only) */}
                                {!feature.bgImage && (
                                    <div className="h-2.5 w-full bg-[#FF6B00] shrink-0" />
                                )}

                                <CardContent className={cn(
                                    "p-0 flex flex-col flex-1",
                                    feature.bgImage ? "p-0 h-full" : "p-6 md:p-8 lg:p-10"
                                )}>
                                    {/* CARD COM IMAGEM (ESTRUTURA) */}
                                    {feature.bgImage ? (
                                        <div className="absolute inset-0 h-full w-full bg-zinc-900">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10" />
                                            <Image
                                                src={feature.bgImage}
                                                alt={feature.title}
                                                fill
                                                quality={80}
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                                            />
                                            <div className="absolute bottom-0 left-0 p-6 md:p-8 lg:p-10 z-20">
                                                <div className="mb-4 md:mb-6 inline-flex items-center justify-center rounded-2xl bg-brand-accent/20 p-3 md:p-4 text-brand-accent backdrop-blur-sm border border-brand-accent/20">
                                                    <feature.icon className="h-6 w-6 md:h-8 md:w-8" strokeWidth={1.5} />
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">{feature.title}</h3>
                                                <p className="text-zinc-200 max-w-lg text-base md:text-lg leading-relaxed font-medium">{feature.description}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        /* CARDS PADRÃO TYPE: MODALIDADES */
                                        <div className="flex flex-col justify-between h-full">
                                            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-2 group-hover:translate-x-0">
                                                <ArrowRight className="h-6 w-6 text-brand" />
                                            </div>

                                            <div className="flex-1">
                                                <div className="mb-4 md:mb-6 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-brand/5 flex items-center justify-center group-hover:bg-brand/10 transition-colors duration-300">
                                                    <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-brand" strokeWidth={1.5} />
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-black text-foreground mb-2 md:mb-3 group-hover:text-brand transition-colors duration-300 tracking-tight">{feature.title}</h3>
                                                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed font-medium text-base md:text-lg">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
