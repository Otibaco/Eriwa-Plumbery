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
      image: "/Emergency-Repairs.webp",
    },
    {
      icon: Settings,
      title: "Water Heater Services",
      description: "Installation, repair, and maintenance of all water heater types",
      link: "/water-heater",
      image: "/Water-Heater-Services.webp",
    },
    {
      icon: Droplets,
      title: "Faucets & Sinks",
      description: "Professional installation and repair of faucets, sinks, and fixtures",
      link: "/faucets-and-sinks",
      image: "/Faucets&Sinks.webp",
    },
    {
      icon: Wrench,
      title: "Drain Cleaning",
      description: "Professional drain cleaning and unclogging services for all pipes",
      link: "/drain-cleaning",
      image: "/Drain-Cleaning.webp",
    },
    {
      icon: Search,
      title: "Leak Detection",
      description: "Advanced leak detection and pipe repair services using modern technology",
      link: "/leak-detection-and-pipe-repairs",
      image: "/Leak-Detection.webp",
    },
    {
      icon: Hammer,
      title: "Toilet Services",
      description: "Complete toilet repair, installation, and replacement services",
      link: "/toilet-repairs-and-installations",
      image: "/toilet-service.webp",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center mb-12 md:mb-16">
          <AnimatedSection animation="fadeInLeft" className="text-center md:text-left">
            <Badge variant="outline" className="mb-3 sm:mb-4">
              Our Services
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Professional Plumbing Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              From emergency repairs to complete installations, we provide comprehensive plumbing
              services for residential and commercial properties across Nigeria.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight">
            <div className="relative w-full max-w-md mx-auto md:max-w-none">
              <Image
                src="/plumbing-service.webp"
                alt="Plumbing Services"
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-full object-cover aspect-[16/10]"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
                <Card className="h-full hover:shadow-xl transition-shadow group">
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={400}
                        height={250}
                        className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full mb-3 sm:mb-4">
                        <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                        {service.description}
                      </p>
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
