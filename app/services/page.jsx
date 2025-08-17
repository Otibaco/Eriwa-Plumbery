"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Wrench,
  Clock,
  Shield,
  Users,
  Phone,
  Calendar,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Droplets,
  Home,
  Truck,
  Settings,
} from "lucide-react"
import { WhatsAppWidget } from "@/components/layout/whatsapp-widget"

const services = [
  {
    id: 1,
    name: "Emergency Plumbing",
    description: "24/7 emergency response for burst pipes, blocked drains, and urgent repairs across Nigeria.",
    icon: Wrench,
    price: "From ₦5,000",
    responseTime: "30 mins",
    features: ["24/7 Availability", "Licensed Plumbers", "Emergency Equipment", "Insurance Coverage"],
    popular: true,
    category: "emergency",
  },
  {
    id: 2,
    name: "Bathroom Installation",
    description: "Complete bathroom renovation and fixture installation with premium quality materials.",
    icon: Users,
    price: "From ₦150,000",
    responseTime: "Same day",
    features: ["Design Consultation", "Quality Materials", "Professional Installation", "1 Year Warranty"],
    popular: false,
    category: "installation",
  },
  {
    id: 3,
    name: "Pipe Installation & Repair",
    description: "Professional pipe installation, repair, and replacement for residential and commercial properties.",
    icon: Settings,
    price: "From ₦8,000",
    responseTime: "2-4 hours",
    features: ["Quality Pipes", "Leak Detection", "Pressure Testing", "Maintenance Tips"],
    popular: false,
    category: "repair",
  },
  {
    id: 4,
    name: "Water Heater Service",
    description: "Installation, repair, and maintenance of all types of water heaters including tankless systems.",
    icon: Zap,
    price: "From ₦12,000",
    responseTime: "Same day",
    features: ["All Brands", "Energy Efficient", "Safety Inspection", "Performance Optimization"],
    popular: true,
    category: "installation",
  },
  {
    id: 5,
    name: "Drain Cleaning",
    description: "Professional drain cleaning and unblocking services using advanced equipment and techniques.",
    icon: Droplets,
    price: "From ₦3,500",
    responseTime: "1-2 hours",
    features: ["High-Pressure Jetting", "Camera Inspection", "Root Removal", "Preventive Maintenance"],
    popular: false,
    category: "repair",
  },
  {
    id: 6,
    name: "Home Plumbing Inspection",
    description: "Comprehensive plumbing system inspection to identify potential issues before they become problems.",
    icon: Home,
    price: "From ₦15,000",
    responseTime: "Scheduled",
    features: ["Full System Check", "Detailed Report", "Maintenance Plan", "Priority Booking"],
    popular: false,
    category: "maintenance",
  },
]

const serviceAreas = [
  {
    city: "Lagos",
    areas: ["Victoria Island", "Ikoyi", "Lekki", "Ikeja", "Surulere", "Yaba", "Ajah", "Maryland"],
    phone: "+234-801-LAGOS-01",
  },
  {
    city: "Abuja",
    areas: ["Wuse", "Garki", "Asokoro", "Maitama", "Gwarinpa", "Kubwa", "Utako", "Jabi"],
    phone: "+234-801-ABUJA-02",
  },
  {
    city: "Port Harcourt",
    areas: ["GRA", "Old GRA", "D-Line", "Rumuola", "Trans Amadi", "Mile 3", "Eliozu", "Woji"],
    phone: "+234-801-PHCITY-03",
  },
]

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedService, setSelectedService] = useState()

  const filteredServices =
    selectedCategory === "all" ? services : services.filter((service) => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Plumbing Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From emergency repairs to complete installations, our certified plumbers deliver quality service across
            Nigeria's major cities with guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Phone className="mr-2 h-5 w-5" />
              Call Emergency: +234-801-PLUMBER
            </Button>
            <Button size="lg" variant="outline">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Service
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Service Categories */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All Services</TabsTrigger>
            <TabsTrigger value="emergency">Emergency</TabsTrigger>
            <TabsTrigger value="installation">Installation</TabsTrigger>
            <TabsTrigger value="repair">Repair</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300">
                    {service.popular && (
                      <Badge className="absolute -top-2 left-4 bg-yellow-500 text-black z-10">Most Popular</Badge>
                    )}

                    <CardHeader className="text-center pb-4">
                      <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <service.icon className="h-8 w-8 text-green-600 dark:text-green-300" />
                      </div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <div className="text-2xl font-bold text-green-600 naira-symbol">{service.price}</div>
                      <div className="text-sm text-muted-foreground">Response: {service.responseTime}</div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{service.description}</p>

                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        className="w-full group-hover:bg-green-700 transition-colors"
                        onClick={() => setSelectedService(service.id)}
                      >
                        Book Service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Service Areas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-600">{area.city}</CardTitle>
                    <p className="text-muted-foreground">{area.phone}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {area.areas.map((location) => (
                        <div
                          key={location}
                          className="text-sm bg-muted rounded-lg p-2 hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
                        >
                          {location}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-muted/50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Eriwa Plumbery?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[Shield, Clock, Star, Truck].map((Icon, index) => {
              const titles = ["Licensed & Insured", "24/7 Emergency", "5-Star Rated", "Free Estimates"]
              const descriptions = [
                "Fully licensed plumbers with comprehensive insurance coverage",
                "Round-the-clock emergency service across all service areas",
                "Consistently rated 4.9/5 stars by thousands of customers",
                "No-obligation quotes and transparent pricing",
              ]

              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-green-600 dark:text-green-300" />
                  </div>
                  <h3 className="font-semibold mb-2">{titles[index]}</h3>
                  <p className="text-sm text-muted-foreground">{descriptions[index]}</p>
                </motion.div>
              )
            })}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
