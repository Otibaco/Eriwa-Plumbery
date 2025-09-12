"use client"

import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/footer/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Phone, CheckCircle, Droplets } from "lucide-react"
import Image from "next/image"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"

export default function FaucetsAndSinksPage() {
  const services = [
    "New sink and faucet installations",
    "Sink clogs",
    "Sink repairs and replacements, big or small",
    "24 hour emergency faucet repair",
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
              <Badge className="mb-4 bg-orange-500 text-white">
                Faucet & Sink Experts
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="text-orange-500">
                  Reliable Faucet and Sink Repairs in Mesa
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                From installations to emergency repairs, we ensure your faucets
                and sinks are working perfectly with professional expertise and
                care.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                Sink or Faucet Problems? We can help!
              </h2>
              <ul className="space-y-3 mb-8">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-start sm:items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1 sm:mt-0" />
                    <span className="text-muted-foreground font-medium">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +234-800-PLUMBER
                </Button>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto"
                >
                  Schedule Sink or Faucet Service
                </Button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full aspect-[3/2]">
                <Image
                  src="/htuuujujjy.jpg"
                  alt="Professional faucet repair"
                  fill
                  className="rounded-lg shadow-2xl object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hidden Faucet Leaks Section */}
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
                Hidden Faucet Leaks and the Damage They Cause
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Faucet leaks can start out as a tiny drip, which, over time, can
                corrode pipes and cabinetry. Because they are often hidden, they
                may go unnoticed until odor or extensive damage occurs.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Don’t let this happen to you! Let Jimmy Joe’s Plumbing install
                your faucets and drains the right way.
              </p>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Schedule Faucet Inspection
              </Button>
            </motion.div>

            {/* Right Box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-blue-50 dark:bg-blue-900 p-6 sm:p-8 rounded-lg shadow-md text-center sm:text-left">
                <Droplets className="h-14 w-14 sm:h-16 sm:w-16 text-blue-600 dark:text-blue-400 mb-6 mx-auto sm:mx-0" />
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                  Early Detection Saves Money
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Regular faucet inspections can prevent costly water damage and
                  save you thousands in repairs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Installation Section */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
              Why Professional Installation is Important
            </h2>
            <p className="text-muted-foreground max-w-3xl sm:max-w-4xl mx-auto mb-8 text-base sm:text-lg leading-relaxed">
              Something as small as a badly installed faucet can cause immense
              damage. Imagine coming home from work one day to find your entire
              home flooded due to an inexpertly installed faucet. Hiring a
              professional, licensed plumber like Jimmy Joe’s Plumbing will cost
              you some money, but it’s nothing compared to the price of a
              disaster!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto"
              >
                Schedule Sink or Faucet Service
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 w-full sm:w-auto"
              >
                Call Now
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
