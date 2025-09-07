"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Star,Quote } from "lucide-react"
import { motion } from "framer-motion"

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

  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Customer Reviews
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.2}>
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
      </div>
    </section>
  )
}
