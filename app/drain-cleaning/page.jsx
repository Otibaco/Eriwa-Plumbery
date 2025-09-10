"use client"

import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/footer/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Phone, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function DrainCleaningPage() {
  const services = ["Drain repair", "Hydro jetting clog removal", "Rooter service", "Camera inspections"]

  const hydroJettingBenefits = [
    "Clean pipes with widths from 2″ to 16″ in runs of up to 500′",
    "Removes buildup in pipes",
    "High pressure cuts through the toughest sludge",
    "Cuts through invasive roots",
    "Blasts away mineral buildup",
    "No digging up landscaping, tearing out walls or flooring",
  ]

  const drainSigns = [
    "Water drains slowly or not at all",
    "The toilet bowl is suddenly completely empty",
    "Sewage backup in a shower or tub",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-4 bg-orange-500">Drain Cleaning Experts</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
                <span className="text-orange-500">Mesa Drain Cleaning Experts</span>
              </h1>

              <p className="text-gray-600 mb-6">
                We offer drain cleaning and repair in all commercial and residential applications. These include kitchen
                and bathroom drains: sink, shower, and industrial drains, sewer pipe cleaning and repair, landscape pipe
                damage repair, water heater plumbing and repair.
              </p>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Call us for help with:</h2>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Get a Drain Cleaning Quote
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drain%20section1.JPG-mBxpgsXUg2mGhV7XLGXATiJfD6VtjE.jpeg"
                alt="Professional drain cleaning service"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Drain Signs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-blue-600 mb-6">
                What are signs that you need drain cleaning service?
              </h2>
              <ul className="space-y-4 mb-8">
                {drainSigns.map((sign, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-blue-600 mb-6">What can you do to avoid this issue?</h2>
              <p className="text-gray-600 mb-8">
                Keeping drains clear is an easy way to prevent a nasty sewage backup. If you notice your sinks draining
                slowly, an odd odor, or anything unusual, call Jimmy Joe's Plumbing today!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hydro Jetting Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-blue-600 mb-6">
                What is Hydro Jetting and what are the Benefits?
              </h2>
              <p className="text-gray-600 mb-6">
                Hydro Jetting is the use of a high-powered jet of water to completely clear drain pipes without damaging
                plumbing.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advantages:</h3>
              <ul className="space-y-2 mb-8">
                {hydroJettingBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Call Now
                </Button>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Get a Drain Cleaning Quote
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drain%20section2.JPG-MokvcfX4CWIXg9MjxJXDcZ89h8Is6p.jpeg"
                alt="Hydro jetting equipment in action"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
