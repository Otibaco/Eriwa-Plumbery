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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-orange-500 text-white">Water Heater Experts</Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-orange-500">Water Heater Repair and Installation</span>{" "}
                <span className="text-blue-600 dark:text-blue-400">Experts in Mesa</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                Replacing your hot water heater can be an expensive option. Sometimes it's more economical to repair a
                hot water heater which is in otherwise reasonable condition. We can also offer hot water solutions for
                larger homes and in situations where a standard hot water heater isn't practical.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +234-800-PLUMBER
                </Button>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto">
                  Get a Water Heater Quote
                </Button>
              </div>
            </motion.div>

            {/* Right Image */}
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
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Image */}
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
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                Why Jimmy Joe's Should Be Your #1 Choice
              </h2>
              <p className="text-muted-foreground mb-6">
                Water heaters are a device your family will use on a daily basis, so it's essential to have the right
                size and type for your needs.
              </p>
              <p className="text-muted-foreground mb-8">
                Tankless water heaters are our specialty, and we have the experience and expertise to do it right.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="text-blue-600 dark:text-blue-400">Water Heater Services</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto">
              From installation to emergency repairs, we handle all your water heater needs with professional expertise.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-100 dark:bg-blue-900 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3">{service}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                      Professional service with guaranteed satisfaction and warranty coverage.
                    </p>
                    <Button
                      variant="outline"
                      className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 w-full sm:w-auto"
                    >
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
      <section className="py-16 sm:py-20 bg-blue-600 dark:bg-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Water Heater Emergency?</h2>
            <p className="text-base sm:text-lg text-blue-100 mb-8 max-w-xl sm:max-w-2xl mx-auto">
              No hot water? Leaking water heater? We provide 24/7 emergency water heater repair services to get your hot
              water flowing again.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-200 dark:text-blue-700 w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Hotline: +234-800-PLUMBER
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto">
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
