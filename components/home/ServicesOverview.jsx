"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplets, Wrench, Zap, Shield, Clock, Phone } from "lucide-react"
import Link from "next/link"

export function ServicesOverview() {
  const services = [
    {
      icon: Droplets,
      title: "Water Heater Services",
      description: "Installation, repair, and maintenance of all water heater types",
      href: "/water-heater",
    },
    {
      icon: Wrench,
      title: "Faucets & Sinks",
      description: "Professional faucet and sink installation and repair services",
      href: "/faucets-and-sinks",
    },
    {
      icon: Zap,
      title: "Drain Cleaning",
      description: "Advanced drain cleaning and hydro jetting services",
      href: "/drain-cleaning",
    },
    {
      icon: Shield,
      title: "Toilet Repairs",
      description: "Complete toilet repair and installation services",
      href: "/toilet-repairs-and-installations",
    },
    {
      icon: Clock,
      title: "Leak Detection",
      description: "Advanced leak detection and pipe repair services",
      href: "/leak-detection-and-pipe-repairs",
    },
    {
      icon: Phone,
      title: "Emergency Service",
      description: "24/7 emergency plumbing service for urgent issues",
      href: "/emergency",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Plumbing Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            From routine maintenance to emergency repairs, we provide comprehensive plumbing solutions for residential
            and commercial properties.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-pretty">{service.description}</p>
                  <Link href={service.href}>
                    <Button
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
