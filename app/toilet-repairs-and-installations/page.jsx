"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/footer/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Phone, CheckCircle } from "lucide-react"

export default function ToiletRepairsPage() {
  const services = ["Clogged toilet", "Running or leaking toilet", "New toilet installation"]

  const clogCauses = [
    "Heavy usage by multiple family members every day",
    "Holidays",
    "Unflushables such as flushable wipes, trash, and anything which isn't toilet paper",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-orange-500 text-white">Toilet Repair Experts</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              <span className="text-orange-500">
                Mesa Clogged Toilet Repair and New Toilet Installation Services
              </span>
            </h1>

            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 text-lg">
              We offer toilet repair or replacement if your toilet is leaking, clogged, running, filling too slowly or
              improperly, or not flushing. We offer environmentally-friendly water-smart options.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">How can we help?</h2>
              <ul className="space-y-2 max-w-md mx-auto">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200 font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Toilet Clogs Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                What causes toilet clogs?
              </h2>
              <ul className="space-y-4 mb-8">
                {clogCauses.map((cause, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">{cause}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Optimized Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/toilet-repair.jpg"
                alt="Toilet repair service"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Service Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Toilet Emergency?</h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
              Overflowing toilet? Severe clog? We provide fast emergency toilet repair services to restore your bathroom
              functionality.
            </p>

            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Emergency Service: +234-800-PLUMBER
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
