import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/home/hero-section"
import { EmergencyBanner } from "@/components/home/emergency-banner"
import { SearchSection } from "@/components/home/search-section"
import { CategoryGrid } from "@/components/home/category-grid"
import { FeaturedProducts } from "@/components/home/featured-products"
import { ServicesOverview } from "@/components/home/services-overview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { BlogPreview } from "@/components/home/blog-preview"
import { NewsletterSection } from "@/components/home/newsletter-section"
import { Footer } from "@/components/layout/footer"
import { WhatsAppWidget } from "@/components/layout/whatsapp-widget"
// import { WhatsAppWidget } from "@/components/ui/whatsapp-widget"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <EmergencyBanner />
        <div className="container mx-auto px-4 py-8 space-y-16">
          <SearchSection />
          <CategoryGrid />
          <FeaturedProducts />
          <ServicesOverview />
          <TestimonialsSection />
          <BlogPreview />
          <NewsletterSection />
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
