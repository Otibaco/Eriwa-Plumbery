"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { ShieldCheck, Clock, Award, Users, Wrench, Star, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"

export function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your complete peace of mind and protection.",
    },
    {
      icon: ShoppingCart,
      title: "Plumbing Products",
      description: "We don’t just fix — we also sell top-quality plumbing tools, pipes, and fittings at great prices.",
    },

    {
      icon: Award,
      title: "Satisfaction Guaranteed",
      description: "100% satisfaction guarantee on all our work with comprehensive warranties included.",
    },

    {
      icon: Wrench,
      title: "Quality Equipment",
      description: "State-of-the-art tools and equipment to ensure efficient and long-lasting repairs.",
    },
    {
      icon: Star,
      title: "5-Star Reviews",
      description: "Consistently rated 5 stars by our customers for quality work and excellent service.",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Round-the-clock emergency service because plumbing problems don't wait for business hours.",
    },

  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Why Eriwa Plumbery is Your Best Choice
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            At Eriwa Plumbery, we provide expert plumbing services and also sell high-quality plumbing products —
            everything you need in one place.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Card className="h-full text-center p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
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
