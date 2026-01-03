import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { Header } from "@/components/layout/header";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bem Estar Academia | A Melhor Academia em Santa Rita PB",
    template: "%s | Bem Estar Academia"
  },
  description: "Treine na melhor academia de Santa Rita PB. Musculação, FitDance, Muay Thai e ambiente 100% climatizado. Agende sua aula experimental grátis hoje!",
  keywords: [
    "academia santa rita pb",
    "musculação santa rita",
    "academia climatizada",
    "fitdance santa rita",
    "muay thai santa rita",
    "aula experimental academia",
    "bem estar academia",
    "melhor academia santa rita"
  ],
  authors: [{ name: "Bem Estar Academia" }],
  creator: "Bem Estar Academia",
  publisher: "Bem Estar Academia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/assets/logo-icon-laranja.svg",
  },
  openGraph: {
    title: "Bem Estar Academia | A Melhor Academia em Santa Rita PB",
    description: "Ambiente climatizado, equipamentos modernos e aulas coletivas. Venha conhecer a Bem Estar Academia em Santa Rita.",
    url: "https://bemestaracademia.com.br", // Substituir pelo domínio real quando disponível
    siteName: "Bem Estar Academia",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bem Estar Academia | Santa Rita PB",
    description: "A melhor estrutura de Santa Rita para seu treino.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { LocalBusinessJsonLd } from "@/components/seo/local-business-json-ld";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        <LocalBusinessJsonLd />
        <Providers>
          <Header />
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
