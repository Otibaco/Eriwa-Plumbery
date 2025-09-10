"use client"

import { Footer } from "@/components/footer/footer"
import { CTASection } from "@/components/home/cta-section"
import { EmergencyBanner } from "@/components/home/emergency-banner"
import { HeroSection } from "@/components/home/hero-section"
import { PartnershipSection } from "@/components/home/PartnershipSection"
import { PlumbingServicesSection } from "@/components/home/PlumbingServicesSection"
import { ServicesPreview } from "@/components/home/services-preview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { TrustSection } from "@/components/home/TrustSection"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { Navigation } from "@/components/navigation/navigation"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"



export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <EmergencyBanner />
      <PlumbingServicesSection /> {/* still makiing update here  */}
      {/* <ServicesPreview /> */}
      {/* <ServicesOverview /> */}
      <TrustSection />
      {/* <WhyChooseUs /> */}
      <PartnershipSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppWidget />

    </main>
  )
}
