"use client"

import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Phone, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection animation="fadeInUp">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Solve Your Plumbing Problems?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
              Contact us today for a free consultation and quote. Our expert team is ready to help with all your
              plumbing needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-primary hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (+234) 703 132 0510
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  Schedule Online
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
