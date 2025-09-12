"use client"

import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/footer/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Phone, CheckCircle, Droplets } from "lucide-react"
import Image from "next/image"

export default function FaucetsAndSinksPage() {
  const services = [
    "New sink and faucet installations",
    "Sink clogs",
    "Sink repairs and replacements, big or small",
    "24 hour emergency faucet repair",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Badge className="mb-4 bg-orange-500 text-white">Faucet & Sink Experts</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
                <span className="text-orange-500">Reliable Faucet and Sink Repairs in Mesa</span>
              </h1>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  Sink or Faucet Problems? We can help!
                </h2>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span className="text-muted-foreground font-medium">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +234-800-PLUMBER
                </Button>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
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
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Faucet%20section1.JPG-eMyoiOFB52nAfcQ3ddGoLt6Slk2Sto.jpeg"
                alt="Professional faucet repair"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hidden Faucet Leaks Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                Hidden Faucet Leaks and the Damage they can Cause
              </h2>
              <p className="text-muted-foreground mb-6">
                Faucet leaks can start out as a tiny drip, which, through time can corrode pipes and cabinetry. Because
                they are in the dark recesses of the kitchen or bathroom cabinet, they can do unnoticed until the
                homeowner notices odor or extensive damage.
              </p>
              <p className="text-muted-foreground mb-8">
                Don't let this happen to you! Let Jimmy Joe's Plumbing install your faucets and drains.
              </p>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Schedule Faucet Inspection
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-blue-50 dark:bg-blue-900 p-8 rounded-lg">
                <Droplets className="h-16 w-16 text-blue-600 dark:text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Early Detection Saves Money</h3>
                <p className="text-muted-foreground">
                  Regular faucet inspections can prevent costly water damage and save you thousands in repairs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Installation Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
              Why Professional Installation is Important
            </h2>
            <p className="text-muted-foreground max-w-4xl mx-auto mb-8 text-lg">
              Something as small as a badly installed faucet can cause immense damage. Imagine coming home from work one
              day to find your entire home flooded due to an inexpertly installed faucet. Unfortunately, we know people
              who have had this happen. While a professional, licensed plumber like Jimmy Joe's Plumbing will cost you
              some money, it's nothing compared to the price of a disaster!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Schedule Sink or Faucet Service
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950"
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
