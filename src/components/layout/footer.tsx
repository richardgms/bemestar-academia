import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { academia } from "@/lib/data"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { Instagram, MapPin, Clock } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-foreground text-white pt-6 pb-6 md:pt-8 md:pb-8 border-t border-white/10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-8 mb-10 md:mb-12">
                    {/* COL 1: BRAND */}
                    <div className="space-y-4 md:space-y-6 text-center md:text-left">
                        <Link href="/" className="inline-flex items-center gap-2 group">
                            <Image
                                src="/assets/logo-icon-laranja.svg"
                                alt="Bem Estar"
                                width={40}
                                height={40}
                                className="h-8 w-8 md:h-10 md:w-10 brightness-110"
                            />
                            <span className="text-lg md:text-xl tracking-tight leading-none text-white">
                                <span className="font-bold block -mb-1">BEM</span>
                                <span className="font-black text-brand uppercase italic">ESTAR</span>
                            </span>
                        </Link>

                        <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            {academia.tagline}
                        </p>

                        <a
                            href={academia.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-white hover:text-brand transition-colors"
                        >
                            <Instagram className="w-5 h-5" />
                            <span className="font-medium">@bemestar_academia</span>
                        </a>
                    </div>

                    {/* COL 2: HORÁRIOS */}
                    <div className="text-center md:text-left">
                        <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 flex items-center gap-2 justify-center md:justify-start">
                            <Clock className="w-4 h-4 md:w-5 md:h-5 text-brand" />
                            Funcionamento
                        </h3>
                        <ul className="space-y-3 md:space-y-4 text-zinc-300 text-sm md:text-base">
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Segunda a Sexta</span>
                                <span className="font-medium text-white">{academia.horarioFuncionamento.semana}</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Sábado</span>
                                <span className="font-medium text-white">{academia.horarioFuncionamento.sabado}</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2 opacity-60">
                                <span>Domingo</span>
                                <span>{academia.horarioFuncionamento.domingo}</span>
                            </li>
                        </ul>
                    </div>

                    {/* COL 3: LOCALIZAÇÃO */}
                    <div className="text-center md:text-left">
                        <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 flex items-center gap-2 justify-center md:justify-start">
                            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-brand" />
                            Onde Estamos
                        </h3>
                        <address className="not-italic text-zinc-300 space-y-2 mb-4 md:mb-6 text-sm md:text-base">
                            <p>{academia.endereco.rua}, {academia.endereco.numero}</p>
                            <p>{academia.endereco.bairro}, {academia.endereco.cidade} - {academia.endereco.estado}</p>
                        </address>

                        <a
                            href={getWhatsAppLink("Olá! Gostaria de saber a localização exata.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors"
                        >
                            Ver no Mapa / Falar no WhatsApp
                        </a>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-zinc-500">
                    <p className="text-center md:text-left">© {new Date().getFullYear()} {academia.nome}. Todos os direitos reservados.</p>
                    <div className="flex gap-4 md:gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
                        <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
