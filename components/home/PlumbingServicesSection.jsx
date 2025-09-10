"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Wrench, Droplets, Zap, Search, Hammer, Settings } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function PlumbingServicesSection() {
  const services = [
    {
      icon: Zap,
      title: "Emergency Repairs",
      description: "24/7 emergency plumbing services for urgent repairs and burst pipes",
      link: "/emergency-repairs",
      image: "/emergency-plumbing-repair-with-tools.jpg",
    },
    {
      icon: Settings,
      title: "Water Heater Services",
      description: "Installation, repair, and maintenance of all water heater types",
      link: "/water-heater",
      image: "/water-heater-installation-service.jpg",
    },
    {
      icon: Droplets,
      title: "Faucets & Sinks",
      description: "Professional installation and repair of faucets, sinks, and fixtures",
      link: "/faucets-and-sinks",
      image: "/faucet-and-sink-installation.jpg",
    },
    {
      icon: Wrench,
      title: "Drain Cleaning",
      description: "Professional drain cleaning and unclogging services for all pipes",
      link: "/drain-cleaning",
      image: "/drain-cleaning-service-with-professional-tools.jpg",
    },
    {
      icon: Search,
      title: "Leak Detection",
      description: "Advanced leak detection and pipe repair services using modern technology",
      link: "/leak-detection-and-pipe-repairs",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Hammer,
      title: "Toilet Services",
      description: "Complete toilet repair, installation, and replacement services",
      link: "/toilet-repairs-and-installations",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection animation="fadeInLeft" className="text-center lg:text-left">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Professional Plumbing Services</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              From emergency repairs to complete installations, we provide comprehensive plumbing services for
              residential and commercial properties across Nigeria.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Plumbing Services"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="h-full hover:shadow-xl transition-shadow group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href={service.link}>Learn More</Link>
                      </Button>
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
