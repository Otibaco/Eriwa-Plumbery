"use client"

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
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-orange-500">Toilet Repair Experts</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              <span className="text-orange-500">Mesa Clogged Toilet Repair and New Toilet Installation Services</span>
            </h1>

            <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg">
              We offer toilet repair or replacement if your toilet is leaking, clogged, running, filling too slowly or
              improperly, or not flushing. We offer environmentally-friendly water-smart options.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">How can we help?</h2>
              <ul className="space-y-2 max-w-md mx-auto">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Toilet Clogs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-blue-600 mb-6">What causes toilet clogs?</h2>
              <ul className="space-y-4 mb-8">
                {clogCauses.map((cause, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{cause}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-blue-600 mb-6">How can you avoid this issue?</h2>
              <p className="text-gray-600 mb-8">
                Toilets should never be used as trash receptacles or have anything in them other than toilet paper. Make
                sure that everyone in the family and visitors adhere to this rule.
              </p>

              <Button className="bg-orange-500 hover:bg-orange-600">Schedule Service</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Service Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Toilet Emergency?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
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
