"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Shield, Clock } from "lucide-react"
import Image from "next/image"

const heroSlides = [
  {
    title: "Nigeria's Most Trusted",
    subtitle: "Plumbing Experts",
    description:
      "From Lagos to Abuja, we deliver professional plumbing solutions with 24/7 emergency service. Quality guaranteed.",
    image: "/hero-plumber-nigeria.png",
    cta: "Shop Products",
    secondaryCta: "Book Service",
  },
  {
    title: "Emergency Plumbing",
    subtitle: "Available 24/7",
    description: "Burst pipes? Blocked drains? Our certified plumbers are ready to help across Nigeria's major cities.",
    image: "/hero-emergency-service.png",
    cta: "Call Emergency",
    secondaryCta: "View Services",
  },
  {
    title: "Premium Quality",
    subtitle: "Affordable Prices",
    description:
      "Shop from Nigeria's largest collection of plumbing supplies. Free delivery in Lagos, Abuja & Port Harcourt.",
    image: "/hero-products-display.png",
    cta: "Browse Products",
    secondaryCta: "View Deals",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = heroSlides[currentSlide]

  return (
    <section className="relative bg-background overflow-hidden min-h-[600px] border-b">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-muted/20"></div>
      <div className="absolute inset-0 bg-[url('/pattern-nigeria.svg')] opacity-5"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          <div className="space-y-8">
            {/* Trust indicators */}
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Shield className="h-5 w-5" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-5 w-5" />
                <span className="text-sm">24/7 Service</span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">
                {slide.title}
                <span className="block text-green-600">{slide.subtitle}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">{slide.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                {slide.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                {slide.secondaryCta}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-green-500/30">
              <div className="text-center">
                <div className="text-3xl font-bold">15K+</div>
                <div className="text-sm text-green-200">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-green-200">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">3</div>
                <div className="text-sm text-green-200">Major Cities</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt="Professional plumbing services in Nigeria"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl"
              priority
            />

            {/* Floating price card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-lg">
              <div className="text-sm font-medium text-gray-600">Starting from</div>
              <div className="text-2xl font-bold text-green-600 naira-symbol">₦5,000</div>
              <div className="text-sm text-gray-500">Service calls</div>
            </div>

            {/* Floating testimonial */}
            <div className="absolute -top-6 -right-6 bg-white text-gray-900 p-4 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-sm">"Excellent service! Fixed my bathroom in 2 hours."</p>
              <p className="text-xs text-gray-500 mt-1">- Adebayo, Lagos</p>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-yellow-400" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
