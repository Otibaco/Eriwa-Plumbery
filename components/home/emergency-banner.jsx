"use client"

import { motion } from "framer-motion"
import { Phone, Clock, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmergencyBanner() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-red-600 text-white py-4"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="bg-red-500 p-2 rounded-full"
              >
                <Phone className="h-5 w-5" />
              </motion.div>
              <div>
                <div className="font-bold text-lg">Emergency Plumbing</div>
                <div className="text-red-100 text-sm">Available 24/7 across Nigeria</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-4 text-red-100">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Response in 30 mins</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Lagos • Abuja • Port Harcourt • Anambra</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <a href="tel:+2348012345678" className="text-2xl font-bold hover:text-yellow-300 transition-colors">
              +234-801-PLUMBER
            </a>
            <Button
              variant="secondary"
              size="sm"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            >
              Call Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
