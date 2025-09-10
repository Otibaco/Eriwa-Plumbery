"use client"

import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Phone, Clock } from "lucide-react"
import { motion } from "framer-motion"

export function EmergencyBanner() {
  return (
    <section className="bg-destructive text-destructive-foreground py-4">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeInUp">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-full">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Emergency Plumbing Service</h3>
                <p className="text-destructive-foreground/90">Available 24/7 - Fast Response Time</p>
              </div>
            </div>
            <Button variant="secondary" size="lg" className="bg-white text-destructive hover:bg-gray-100">
              <Phone className="w-4 h-4 mr-2" />
              Call Emergency Line
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}