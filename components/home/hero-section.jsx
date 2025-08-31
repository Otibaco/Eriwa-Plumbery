"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ParallaxHero } from "@/components/ui/parallax-hero"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Phone, CheckCircle, Star, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function HeroSection() {
  // real one
  // const backgroundImages = ["/professional-plumber-working-on-pipes-in-modern-ba.png", "/plumbing-tools-and-equipment-on-clean-workspace.png", "/modern-kitchen-with-professional-plumbing-installa.png"]
  const backgroundImages = ["/pipes.jpg", "/backgroundplumbery.jpg", "/tools-materials.jpg"]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000) // ⏳ every 5s
    return () => clearInterval(timer)
  }, [backgroundImages.length])

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImages[currentSlide]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50" /> {/* dark overlay */}
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatedSection animation="fadeInLeft" className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                <Star className="w-4 h-4 mr-1 fill-current" />
                #1 Rated Plumbing Service
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Expert Plumbing
              <span className="block text-blue-200">Solutions</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Professional repair, installation, and emergency services available 24/7. Licensed, insured, and trusted
              by 500+ customers.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-primary hover:bg-blue-50">
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 123-4567
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-6 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>100% Satisfaction Guaranteed</span>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Right Content - Stats */}
          <AnimatedSection animation="fadeInRight" delay={0.4} className="text-white">
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-200">Happy Customers</div>
              </motion.div>
              <motion.div
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Emergency Service</div>
              </motion.div>
              <motion.div
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-200">Years Experience</div>
              </motion.div>
              <motion.div
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-200">Satisfaction Rate</div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Slide indicators */}
        <motion.div
          className="flex justify-center gap-2 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/40"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
