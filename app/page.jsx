import { FeaturedProducts } from "@/components/featured-products/featured-products";
import { Footer } from "@/components/footer/footer";
import { HeroSection } from "@/components/hero-section/hero-section";
import { Navigation } from "@/components/navigation/navigation";
import { ServicesSection } from "@/components/services-section/services-section";
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedProducts />
      <ServicesSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
