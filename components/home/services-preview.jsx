"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Wrench, Hammer, Droplets, Zap, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function ServicesPreview() {
  const services = [
    {
      icon: Wrench,
      title: "Emergency Repairs",
      description: "24/7 emergency plumbing repairs for leaks, burst pipes, and urgent issues.",
      price: "Starting at $89",
      features: ["24/7 availability", "Same-day service", "Licensed technicians"],
    },
    {
      icon: Hammer,
      title: "Professional Installation",
      description: "Expert installation of fixtures, water heaters, and complete plumbing systems.",
      price: "Starting at $299",
      features: ["Quality materials", "Code compliance", "Warranty included"],
    },
    {
      icon: Droplets,
      title: "Drain Cleaning",
      description: "Professional drain cleaning and unclogging using advanced equipment.",
      price: "Starting at $129",
      features: ["Hydro jetting", "Camera inspection", "Root removal"],
    },
    {
      icon: Zap,
      title: "Water Heater Service",
      description: "Complete water heater repair, maintenance, and replacement services.",
      price: "Starting at $149",
      features: ["All heater types", "Energy efficiency", "Safety inspection"],
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Professional Plumbing Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From emergency repairs to complete installations, we provide comprehensive plumbing solutions for your home
            and business.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <Badge variant="secondary">{service.price}</Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full bg-transparent">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeInUp" delay={0.5} className="text-center">
          <Link href="/services">
            <Button size="lg" className="text-lg px-8">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
