"use client"

import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export function PartnershipSection() {
  const partners = [
    { name: "Kohler", logo: "people/kohler-plumbing-brand-logo.png" },
    { name: "American Standard", logo: "people/american-standard-plumbing-logo.jpg" },
    { name: "Delta Faucet", logo: "people/delta-faucet-brand-logo.png" },
    { name: "Moen", logo: "people/moen-plumbing-brand-logo.jpeg" },
    { name: "Grohe", logo: "people/grohe-plumbing-brand-logo.png" },
    { name: "Hansgrohe", logo: "people/hansgrohe-plumbing-logo.jpg" },
    { name: "TOTO", logo: "people/toto-plumbing-brand-logo.jpeg" },
    { name: "Pfister", logo: "people/pfister-plumbing-brand-logo.png" },
  ]

  return (
    <section className="py-16 sm:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Image */}
          <AnimatedSection animation="fadeInLeft">
            <div className="relative w-full max-w-md mx-auto lg:max-w-full">
              <Image
                src="/Partnership-section-image.png"
                alt="Partnership Section"
                width={600}
                height={500}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
                priority
              />
            </div>
          </AnimatedSection>

          {/* Right Text */}
          <AnimatedSection animation="fadeInRight">
            <Badge variant="outline" className="mb-3 sm:mb-4">
              Our Partners
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-balance">
              Trusted Partnerships for Quality Solutions
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty leading-relaxed">
              We partner with leading brands and suppliers to bring you the highest quality plumbing products and
              services. Our strong relationships ensure competitive pricing and reliable supply chains.
            </p>
            <Button size="lg" className="mb-6 sm:mb-8 w-full sm:w-auto">
              Partner with Eriwa Plumbery for long-term success
            </Button>
          </AnimatedSection>
        </div>

        {/* Partner logos marquee */}
        <AnimatedSection animation="fadeInUp" className="mt-12 sm:mt-16">
          <div className="overflow-hidden relative px-2 sm:px-0">
            <motion.div
              animate={{ x: [0, -200 * partners.length] }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              className="flex gap-6 sm:gap-8 items-center"
              style={{ width: `${220 * partners.length}px` }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-24 sm:w-28 md:w-32 h-14 sm:h-16 md:h-20 bg-white rounded-lg shadow-sm flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={80}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
