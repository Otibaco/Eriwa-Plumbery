"use client"

import { HeroSection } from "@/components/home/hero-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { EmergencyBanner } from "@/components/home/emergency-banner"
import { CTASection } from "@/components/home/cta-section"
import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/footer/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <EmergencyBanner />
      <ServicesPreview />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
