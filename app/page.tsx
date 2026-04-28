import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Ticker } from "@/components/ticker"
import { SocialProof } from "@/components/social-proof"
import { PainSection } from "@/components/pain-section"
import { MethodSection } from "@/components/method-section"
import { OrbitSection } from "@/components/orbit-section"
import { WhySection } from "@/components/why-section"
import { TeamSection } from "@/components/team-section"
import { CTABanner } from "@/components/cta-banner"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Ticker />
      <SocialProof />
      <PainSection />
      <MethodSection />
      <OrbitSection />
      <WhySection />
      <TeamSection />
      <CTABanner />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
