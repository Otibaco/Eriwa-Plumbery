"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Clock, Shield, DollarSign, Zap, Award, Users, ShieldCheck, ShoppingCart, AwardIcon, Wrench, Star } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function TrustSection() {
  const trustFeatures = [
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
        icon: AwardIcon,
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fadeInLeft">
            <Badge variant="outline" className="mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Why Customers Trust Eriwa Plumbery</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              We've built our reputation on reliability, quality, and exceptional customer service. Here's what sets us
              apart from the competition.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trustFeatures.map((feature, index) => (
                <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                          <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight">
            <div className="relative">
              <Image
                src="/professional-plumbers-trust-illustration-with-tool.jpg"
                alt="Plumbers Trust Section"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
