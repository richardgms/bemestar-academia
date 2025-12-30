"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { getWhatsAppLink } from "@/lib/whatsapp"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
    { label: "Início", href: "#inicio" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Modalidades", href: "#modalidades" },
    { label: "Horários", href: "#horarios" },
    { label: "Planos", href: "#planos" },
]

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-brand h-20 md:h-16 flex items-center shadow-md"
        >
            <Container className="flex items-center justify-between">
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2 group">
                    <img
                        src="/assets/logo-icon-branco.svg"
                        alt="Bem Estar"
                        className="h-8 w-8 sm:h-10 sm:w-10 transition-transform group-hover:scale-110"
                    />
                    <span className="hidden sm:block text-xl md:text-2xl tracking-tighter leading-none text-white">
                        <span className="font-bold block -mb-1">BEM</span>
                        <span className="font-black uppercase italic">ESTAR</span>
                    </span>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-base font-bold text-white/90 hover:text-white transition-colors uppercase tracking-tight"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Button
                        size="sm"
                        className="bg-white text-brand hover:bg-white/90 shadow-lg font-bold text-sm h-10 px-6"
                        asChild
                    >
                        <a
                            href={getWhatsAppLink("Olá! Gostaria de agendar minha aula experimental gratuita.")}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Agendar Aula Grátis
                        </a>
                    </Button>
                </nav>

                {/* MOBILE NAV */}
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-12 w-12">
                                <Menu className="h-7 w-7" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="flex flex-col gap-8 pt-16">
                            <div className="flex flex-col gap-6">
                                {NAV_LINKS.map((link) => (
                                    <SheetClose asChild key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-2xl font-bold text-foreground hover:text-brand transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </SheetClose>
                                ))}
                            </div>

                            <div className="mt-auto pb-8">
                                <Button className="w-full text-lg h-14" asChild>
                                    <a
                                        href={getWhatsAppLink("Olá! Gostaria de agendar minha aula experimental gratuita.")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Agendar Aula Grátis
                                    </a>
                                </Button>
                                <p className="text-center text-muted mt-4 text-sm">
                                    Vem ser BE 🧡
                                </p>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </Container>
        </header>
    )
}
