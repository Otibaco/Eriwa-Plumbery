"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
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
      text: "I ordered plumbing tools from Eriwa Plumbery and got them delivered fast. The products were top quality, fairly priced, and exactly what I needed.",
    },
    {
      name: "Semi Ola",
      location: "Onitsha",
      rating: 5,
      text: "Excellent service! They fixed our emergency leak at 2 AM and were professional throughout. Highly recommend Eriwa Plumbery!",
    },
    {
      name: "Chinedu Akpan",
      location: "Sapelle",
      rating: 5,
      text: "Professional installation of our new water heater. Fair pricing, quality work, and they cleaned up perfectly. Will use again!",
    },
    {
      name: "Fatima Ibrahim",
      location: "Kano",
      rating: 5,
      text: "Outstanding drain cleaning service. They arrived on time, diagnosed the problem quickly, and fixed it efficiently. Great value for money!",
    },
    {
      name: "Emeka Okafor",
      location: "Enugu",
      rating: 5,
      text: "Needed emergency toilet repair on a Sunday. Eriwa Plumbery came through! Professional, courteous, and reasonably priced.",
    },
    {
      name: "Kemi Adebayo",
      location: "Lagos",
      rating: 5,
      text: "Bought a complete bathroom fixture set. Quality products, competitive prices, and excellent customer service. Highly satisfied!",
    },
    {
      name: "Musa Garba",
      location: "Kaduna",
      rating: 5,
      text: "Leak detection service was thorough and accurate. They found the hidden pipe leak that others missed. Saved us thousands in water damage!",
    },
    {
      name: "Grace Okoro",
      location: "Port Harcourt",
      rating: 5,
      text: "Faucet installation was seamless. The technician was knowledgeable, clean, and completed the job ahead of schedule.",
    },
    {
      name: "Yusuf Mohammed",
      location: "Abuja",
      rating: 5,
      text: "Emergency pipe burst repair at midnight. They responded within 30 minutes and had us back to normal by morning. Exceptional service!",
    },
    {
      name: "Blessing Eze",
      location: "Owerri",
      rating: 5,
      text: "Ordered plumbing supplies online. Fast delivery, products exactly as described, and great packaging. Will definitely order again!",
    },
    {
      name: "Ibrahim Sani",
      location: "Jos",
      rating: 5,
      text: "Water heater maintenance service was thorough. They explained everything clearly and gave helpful tips for future care.",
    },
    {
      name: "Chioma Nwankwo",
      location: "Awka",
      rating: 5,
      text: "Bathroom renovation supplies were top quality. The team helped with product selection and provided excellent technical advice.",
    },
    {
      name: "Abdullahi Baba",
      location: "Maiduguri",
      rating: 5,
      text: "Sink installation was perfect. Clean work, fair pricing, and they even helped with minor adjustments later. True professionals!",
    },
    {
      name: "Folake Adeyemi",
      location: "Ibadan",
      rating: 5,
      text: "Drain cleaning service exceeded expectations. They cleared a stubborn blockage that had been troubling us for months.",
    },
    {
      name: "Daniel Okwu",
      location: "Calabar",
      rating: 5,
      text: "Emergency plumbing service during the holidays. They came out immediately and fixed our burst pipe. Saved our Christmas celebration!",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const itemsPerPage = 3
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services and
              products.
            </p>
          </AnimatedSection>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCurrentTestimonials().map((testimonial, index) => (
            <AnimatedSection key={`${testimonial.name}-${index}`} animation="fadeInUp" delay={index * 0.1}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-6">
                      <Quote className="w-6 h-6 text-primary" />
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
