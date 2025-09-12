"use client"

import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/footer/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Phone, Search, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function LeakDetectionPage() {
  const leakSigns = [
    "Unexplained musty odor",
    "Loose or missing tiles",
    "Mold growth in walls or ceilings",
    "Mushy spots in the landscape",
    "Loss of water pressure",
    "Higher than normal water bill",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-orange-500 text-white">
                Leak Detection Specialists
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-orange-500">
                  Experts in Leak Detection
                </span>{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  and Pipe Repairs
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                Our licensed plumbers specialize in detecting and repairing
                hidden leaks before they become costly disasters. Using
                state-of-the-art technology, we identify and fix leaks with
                precision and minimal disruption.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +234-800-PLUMBER
                </Button>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto">
                  Schedule Inspection
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leak-detection-hero.jpg"
                alt="Leak detection inspection"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leak Detection Section */}
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
                Leak Detection
              </h2>
              <p className="text-muted-foreground mb-6">
                A water leak can cause major damage to your home and property.
                Because water moves in unusual ways, locating the source can be
                time-consuming and costly if not done properly.
              </p>
              <p className="text-muted-foreground mb-8">
                Our team uses advanced tools to quickly determine the source and
                extent of leaks, saving you money and preventing further damage.
              </p>
            </motion.div>

            {/* Right Signs */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                Signs You May Have a Leak
              </h2>
              <ul className="space-y-4">
                {leakSigns.map((sign, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-muted-foreground">{sign}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Technology Section */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leak-technology.jpg"
                alt="Advanced leak detection technology"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Search className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                Advanced Leak Detection Technology
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                Our state-of-the-art equipment allows us to pinpoint leaks
                without destructive digging or wall removal. We use electronic
                leak detection, thermal imaging, and acoustic equipment to find
                even the most hidden leaks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Leak Detection: +234-800-PLUMBER
                </Button>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto">
                  Schedule Inspection
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 sm:py-20 bg-red-600 dark:bg-red-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Water Leak Emergency?
            </h2>
            <p className="text-base sm:text-lg  text-red-100 mb-8 max-w-xl sm:max-w-2xl mx-auto">
              Active water leak causing damage? Turn off your main water supply
              and call us immediately for emergency leak repair service.
            </p>

            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 dark:bg-gray-200 dark:text-red-700 w-full sm:w-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              Emergency Leak Repair: +234-800-PLUMBER
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
