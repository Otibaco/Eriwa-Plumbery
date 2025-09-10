"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Clock, Zap } from "lucide-react"

export function EmergencySection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Zap className="h-12 w-12" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Emergency Plumbing Service</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-pretty">
            Plumbing emergencies don't wait for business hours. Our expert technicians are available 24/7 to handle your
            urgent plumbing needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Fast Response Time</span>
            </div>
          </div>

          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Phone className="mr-2 h-5 w-5" />
            Call Emergency Line: +234-800-PLUMBER
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
