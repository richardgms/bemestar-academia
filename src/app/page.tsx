import { HeroSection } from "@/components/sections/hero-section";
import { DiferenciaisSection } from "@/components/sections/diferenciais-section";
import { ModalidadesSection } from "@/components/sections/modalidades-section";
import { HorariosSection } from "@/components/sections/horarios-section";
import { PlanosSection } from "@/components/sections/planos-section";
import { CTASection } from "@/components/sections/cta-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { CtaIntermediarioSection } from "@/components/sections/cta-intermediario-section";

import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <DiferenciaisSection />
      <SocialProofSection />
      <PlanosSection />
      <ModalidadesSection />
      <CtaIntermediarioSection />
      <HorariosSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
