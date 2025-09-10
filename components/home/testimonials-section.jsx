"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aisha Bello",
      location: "Zaria",
      rating: 5,
      image: "/people/blessing-olarewaju.jpg",
      text: "I ordered plumbing tools from Eriwa Plumbery and got them delivered fast. The products were top quality, fairly priced, and exactly what I needed.",
    },
    {
      name: "Semi Ola",
      location: "Onitsha",
      rating: 5,
      image: "/people/eyo-archibong.jpg",
      text: "Excellent service! They fixed our emergency leak at 2 AM and were professional throughout. Highly recommend Eriwa Plumbery!",
    },
    {
      name: "Chinedu Akpan",
      location: "Sapelle",
      rating: 5,
      image: "/people/itoro-bernard.jpg",
      text: "Professional installation of our new water heater. Fair pricing, quality work, and they cleaned up perfectly. Will use again!",
    },
    {
      name: "Tina sewa",
      location: "Kano",
      rating: 5,
      image: "/people/sewa-owoeye.jpg",
      text: "Outstanding drain cleaning service. They arrived on time, diagnosed the problem quickly, and fixed it efficiently. Great value for money!",
    },
    {
      name: "Emeka Okafor",
      location: "Enugu",
      rating: 5,
      image: "/people/prince-akachi.jpg",
      text: "Needed emergency toilet repair on a Sunday. Eriwa Plumbery came through! Professional, courteous, and reasonably priced.",
    },
    {
      name: "Kemi Adebayo",
      location: "Lagos",
      rating: 5,
      image: "/people/micheal-ogungbe.jpg",
      text: "Bought a complete bathroom fixture set. Quality products, competitive prices, and excellent customer service. Highly satisfied!",
    },
    {
      name: "Musa Garba",
      location: "Kaduna",
      rating: 5,
      image: "/people/lanre-tobi.jpg",
      text: "Leak detection service was thorough and accurate. They found the hidden pipe leak that others missed. Saved us thousands in water damage!",
    },
    {
      name: "Grace Okoro",
      location: "Port Harcourt",
      rating: 5,
      image: "/people/itoro-bernard.jpg",
      text: "Faucet installation was seamless. The technician was knowledgeable, clean, and completed the job ahead of schedule.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const itemsPerPage = 4
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getCurrentTestimonials = () => {
    if (showAll) return testimonials
    const start = currentIndex * itemsPerPage
    return testimonials.slice(start, start + itemsPerPage)
  }

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection animation="fadeInLeft">
            <div className="relative">
              <Image
                src="/customer-reviews-illustration-with-happy-customers.jpg"
                alt="Customer Reviews Illustration"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight" className="text-center lg:text-left">
            <Badge variant="outline" className="mb-4">
              Customer Reviews
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our
              services and products.
            </p>
          </AnimatedSection>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={showAll}
              className="rounded-full bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={showAll}
              className="rounded-full bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <Button variant="outline" onClick={() => setShowAll(!showAll)} className="ml-auto">
            {showAll ? "Show Less" : "Load More Reviews"}
          </Button>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {getCurrentTestimonials().map((testimonial, index) => (
            <AnimatedSection key={`${testimonial.name}-${index}`} animation="fadeInUp" delay={index * 0.1}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    {/* Profile image */}
                    <div className="flex justify-center mb-6">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full border-2 border-primary shadow"
                      />
                    </div>

                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <p className="text-muted-foreground mb-6 text-center italic">"{testimonial.text}"</p>

                    <div className="text-center">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Dots */}
        {!showAll && (
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
