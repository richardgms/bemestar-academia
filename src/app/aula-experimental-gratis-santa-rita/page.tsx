import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { CheckCircle2, MapPin, Snowflake, Users, Trophy } from "lucide-react"
import { getWhatsAppLink } from "@/lib/whatsapp"

export const metadata: Metadata = {
    title: "Aula Experimental Grátis em Santa Rita | Bem Estar Academia",
    description: "Venha treinar de graça por um dia na melhor academia de Santa Rita PB. Ambiente 100% climatizado, professores atenciosos e equipamentos novos. Agende agora!",
    alternates: {
        canonical: "https://bemestaracademia.com.br/aula-experimental-gratis-santa-rita", // Canonical URL for this specific page
    }
}

export default function AulaExperimentalPage() {
    const benefits = [
        {
            icon: Snowflake,
            title: "100% Climatizada",
            description: "Chega de passar calor. Aqui você treina no fresquinho, com ar-condicionado em toda a academia."
        },
        {
            icon: Users,
            title: "Professores que te Ensinam",
            description: "Não sabe por onde começar? Fique tranquilo. Nossa equipe te acompanha e ensina cada exercício."
        },
        {
            icon: Trophy,
            title: "Melhores Equipamentos",
            description: "Máquinas novas e modernas para garantir a segurança e eficiência do seu treino em Santa Rita."
        },
    ]

    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION */}
            <section className="relative py-20 md:py-32 overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-brand/20 opacity-90" />
                <Container className="relative z-10">
                    <div className="max-w-2xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand font-bold text-sm uppercase tracking-widest border border-brand/20">
                            <MapPin className="w-4 h-4" />
                            Santa Rita - PB
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            Sua <span className="text-brand">Aula Experimental</span> é Por Nossa Conta!
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                            Descubra por que a <strong>Bem Estar</strong> é a academia preferida de Santa Rita. Treine um dia de graça, sem compromisso, e sinta a diferença.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button
                                size="lg"
                                className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg h-14 px-8 shadow-lg shadow-green-600/20"
                                asChild
                            >
                                <a
                                    href={getWhatsAppLink("Olá! Vi a página da Aula Experimental Grátis e quero agendar meu dia de treino em Santa Rita!")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Quero Minha Aula Grátis
                                </a>
                            </Button>
                        </div>

                        <p className="text-sm text-zinc-500">
                            * Válido para novos alunos de Santa Rita e região.
                        </p>
                    </div>
                </Container>
            </section>

            {/* WHY US SECTION */}
            <Section className="bg-zinc-50">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mb-4">
                            Por que escolher a <span className="text-brand">Bem Estar?</span>
                        </h2>
                        <p className="text-zinc-600 max-w-2xl mx-auto">
                            Não somos apenas uma academia. Somos o lugar onde você vai finalmente gostar de treinar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-100 hover:border-brand/20 transition-all hover:-translate-y-1">
                                <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-6 text-brand">
                                    <benefit.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-3">{benefit.title}</h3>
                                <p className="text-zinc-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* MODALITIES TEASER */}
            <Section className="bg-white">
                <Container>
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-black text-zinc-900">
                                Muito mais que musculação
                            </h2>
                            <p className="text-lg text-zinc-600">
                                Na sua aula experimental, você pode conhecer também nossas aulas coletivas. Temos opções para todos os gostos:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Musculação Completa e Assistida",
                                    "FitDance (Dança)",
                                    "Muay Thai",
                                    "BodyPump",
                                    "Pilates Solo"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-zinc-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-brand" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-4">
                                <Button variant="outline" size="lg" className="border-brand text-brand hover:bg-brand hover:text-white" asChild>
                                    <a href="/#horarios">Ver Horários das Aulas</a>
                                </Button>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            {/* Imagem ilustrativa ou gradiente se não tiver imagem pronta */}
                            <div className="aspect-video rounded-2xl bg-zinc-900 flex items-center justify-center text-zinc-500 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand to-purple-600 opacity-20 mix-blend-overlay" />
                                <span className="text-sm">Imagem da Aula Coletiva</span>
                                {/* Idealmente colocar uma imagem real aqui se tiver */}
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* FINAL CTA */}
            <section className="py-20 bg-brand text-white text-center">
                <Container>
                    <h2 className="text-3xl md:text-5xl font-black mb-6">
                        Comece hoje sua mudança!
                    </h2>
                    <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
                        Não deixe para depois. A melhor hora para cuidar de você é agora. Venha fazer parte da família Bem Estar em Santa Rita.
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-brand hover:bg-zinc-100 font-bold text-lg h-16 px-10 shadow-xl"
                        asChild
                    >
                        <a
                            href={getWhatsAppLink("Olá! Quero agendar minha aula experimental agora!")}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Agendar Aula Grátis no WhatsApp
                        </a>
                    </Button>
                </Container>
            </section>
        </div>
    )
}
