"use client"

import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export function PartnershipSection() {
  const partners = [
    { name: "Kohler", logo: "/kohler-plumbing-brand-logo.jpg" },
    { name: "American Standard", logo: "/american-standard-plumbing-logo.jpg" },
    { name: "Delta Faucet", logo: "/delta-faucet-brand-logo.jpg" },
    { name: "Moen", logo: "/moen-plumbing-brand-logo.jpg" },
    { name: "Grohe", logo: "/grohe-plumbing-brand-logo.jpg" },
    { name: "Hansgrohe", logo: "/hansgrohe-plumbing-logo.jpg" },
    { name: "TOTO", logo: "/toto-plumbing-brand-logo.jpg" },
    { name: "Pfister", logo: "/pfister-plumbing-brand-logo.jpg" },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fadeInLeft">
            <div className="relative">
              <Image
                src="/partnership-handshake-illustration-with-plumbing-t.jpg"
                alt="Partnership Section"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight">
            <Badge variant="outline" className="mb-4">
              Our Partners
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Trusted Partnerships for Quality Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              We partner with leading brands and suppliers to bring you the highest quality plumbing products and
              services. Our strong relationships ensure competitive pricing and reliable supply chains.
            </p>
            <Button size="lg" className="mb-8">
              Partner with Eriwa Plumbery for long-term success
            </Button>
          </AnimatedSection>
        </div>

        {/* Partner logos marquee */}
        <AnimatedSection animation="fadeInUp" className="mt-16">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -100 * partners.length] }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="flex gap-8 items-center"
              style={{ width: `${200 * partners.length}px` }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
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
