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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-orange-500 text-white">Toilet Repair Experts</Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-orange-500">Mesa Clogged Toilet Repair</span>{" "}
                <span className="text-blue-600 dark:text-blue-400">and Installation Services</span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                We offer toilet repair or replacement if your toilet is leaking, clogged, running, filling too slowly
                or improperly, or not flushing. We also provide environmentally-friendly water-smart options.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +234-800-PLUMBER
                </Button>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto">
                  Schedule Service
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
                src="/toilet-repair.jpg"
                alt="Professional toilet repair service"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Toilet Clogs Section */}
      <section className="py-16 sm:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                What causes toilet clogs?
              </h2>
              <ul className="space-y-4 mb-8">
                {clogCauses.map((cause, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground text-sm sm:text-base">{cause}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/toilet-section1.jpg"
                alt="Preventing toilet clogs"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Toilet Emergency?</h2>
            <p className="text-base sm:text-lg text-blue-100 dark:text-blue-200 mb-8 max-w-xl sm:max-w-2xl mx-auto">
              Overflowing toilet? Severe clog? We provide fast emergency toilet repair services to restore your bathroom
              functionality quickly and reliably.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-200 dark:text-blue-700 w-full sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency Hotline: +234-800-PLUMBER
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto">
                Schedule Online
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
