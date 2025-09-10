"use client"

import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/footer/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Phone, CheckCircle, Wrench } from "lucide-react"
import Image from "next/image"

export default function WaterHeaterPage() {
  const services = [
    "Water heater installation",
    "Tankless water heater repair",
    "Traditional tank water heater service",
    "Water heater replacement",
    "Emergency water heater repair",
    "Water heater maintenance",
  ]

  const benefits = [
    "Licensed and insured technicians",
    "24/7 emergency service available",
    "Upfront pricing with no hidden fees",
    "Warranty on all installations",
    "Same-day service when possible",
    "Free estimates on new installations",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-4 bg-orange-500">Water Heater Experts</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
                <span className="text-orange-500">Water Heater Repair and Installation</span>{" "}
                <span className="text-blue-600">Experts in Mesa</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-pretty">
                Replacing your hot water heater can be an expensive option. Sometimes it's more economical to repair a
                hot water heater which is in otherwise reasonable condition. We can also offer hot water solutions for
                larger homes and in situations where a standard hot water heater isn't practical.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +234-800-PLUMBER
                </Button>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Get a Water Heater Quote
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Water%20Heater%20section4.JPG-hRABDLSVlDJvYNEfaSmGUZoenX5Vh0.jpeg"
                alt="Professional water heater installation"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Water%20Heater%20section1.JPG-tvnVItirFSncBLWVIQ0xavZNmIBJ4b.jpeg"
                alt="Water heater repair technician"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-blue-600 mb-6">Why Jimmy Joe's Should Be Your #1 Choice</h2>
              <p className="text-gray-600 mb-6">
                Water heaters are a device your family will use on a daily basis, so it's essential to have the right
                size and type for your needs.
              </p>
              <p className="text-gray-600 mb-8">
                Tankless water heaters are our specialty, and we have the experience and expertise to do it right.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Water Heater Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From installation to emergency repairs, we handle all your water heater needs with professional expertise.
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
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wrench className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{service}</h3>
                    <p className="text-gray-600 mb-4">
                      Professional service with guaranteed satisfaction and warranty coverage.
                    </p>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Water Heater Emergency?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              No hot water? Leaking water heater? We provide 24/7 emergency water heater repair services to get your hot
              water flowing again.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Hotline: +234-800-PLUMBER
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Schedule Service Online
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
