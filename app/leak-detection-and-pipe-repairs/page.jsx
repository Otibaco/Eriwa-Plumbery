"use client"

import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/footer/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Phone, Search, AlertTriangle } from "lucide-react"

export default function LeakDetectionPage() {
  const leakSigns = [
    "Unexplained musty odor",
    "Loose or missing tiles",
    "Mold",
    "Mushy spot in the landscape",
    "Loss of water pressure",
    "Bigger than normal water bill",
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
            <Badge className="mb-4 bg-orange-500">Leak Detection Specialists</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              <span className="text-orange-500">Experts in Leak Detection and Pipe Leak Repairs</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Leak Detection Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-blue-600 mb-6">Leak Detection</h2>
              <p className="text-gray-600 mb-6">
                A water leak can cause unrepentant damage to your home and property. But, because water moves in unusual
                ways, sometimes locating the source of that leak can be a time-consuming, and therefore expensive,
                proposition.
              </p>
              <p className="text-gray-600 mb-8">
                We use the most advanced technology and expertise to not only determine the cause and placement of the
                leak, but also determine if the issue is singular or a systemic failure. This gives you the best
                possible outcome with regard to water loss and property damage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-blue-600 mb-6">Signs You May Have a Leak</h2>
              <ul className="space-y-3">
                {leakSigns.map((sign, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Advanced Leak Detection Technology</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg">
              Our state-of-the-art equipment allows us to pinpoint leaks without destructive digging or wall removal. We
              use electronic leak detection, thermal imaging, and acoustic equipment to locate even the most hidden
              leaks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-5 w-5" />
                Call for Leak Detection: +234-800-PLUMBER
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Schedule Inspection
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <AlertTriangle className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Water Leak Emergency?</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Active water leak causing damage? Turn off your main water supply and call us immediately for emergency
              leak repair service.
            </p>

            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
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
