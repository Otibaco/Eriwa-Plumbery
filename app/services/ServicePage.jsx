"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wrench, Hammer, ShieldCheck, Clock, Phone, CheckCircle, Award } from "lucide-react"
import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/footer/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"
import { AnimatedSection } from "@/components/ui/animated-section"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const repairServices = [
    {
      title: "Emergency Leak Repairs",
      description: "24/7 emergency response for burst pipes, leaking faucets, and water damage prevention.",
      price: "Starting at $89",
      features: ["24/7 availability", "Same-day service", "Water damage prevention", "Insurance documentation"],
    },
    {
      title: "Drain Cleaning & Unclogging",
      description: "Professional drain cleaning using advanced equipment to clear blockages and restore flow.",
      price: "Starting at $129",
      features: ["Hydro jetting", "Camera inspection", "Root removal", "Preventive maintenance"],
    },
    {
      title: "Water Heater Repair",
      description: "Expert diagnosis and repair of gas, electric, and tankless water heating systems.",
      price: "Starting at $149",
      features: ["All heater types", "Energy efficiency check", "Safety inspection", "Parts warranty"],
    },
    {
      title: "Toilet & Fixture Repair",
      description: "Complete repair services for toilets, sinks, showers, and bathroom fixtures.",
      price: "Starting at $79",
      features: ["Running toilets", "Leaky faucets", "Shower repairs", "Fixture replacement"],
    },
  ]

  const installationServices = [
    {
      title: "Complete Bathroom Installation",
      description: "Full bathroom renovations including plumbing, fixtures, and modern upgrades.",
      price: "Starting at $2,499",
      features: ["Design consultation", "Permit handling", "Quality fixtures", "Project management"],
    },
    {
      title: "Kitchen Plumbing Installation",
      description: "Professional installation of kitchen sinks, dishwashers, and water filtration systems.",
      price: "Starting at $899",
      features: ["Sink installation", "Dishwasher hookup", "Water filters", "Garbage disposal"],
    },
    {
      title: "Water Heater Installation",
      description: "Professional installation of new water heaters with energy-efficient options.",
      price: "Starting at $1,299",
      features: ["Energy efficient models", "Proper sizing", "Code compliance", "Extended warranty"],
    },
    {
      title: "Pipe Installation & Repiping",
      description: "Complete pipe installation and whole-house repiping with modern materials.",
      price: "Starting at $3,999",
      features: ["Modern materials", "Pressure testing", "Minimal disruption", "Lifetime warranty"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fadeInUp">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Wrench className="w-8 h-8" />
              <Badge variant="secondary" className="text-sm">
                Professional Services
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Expert Plumbing Services</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 text-pretty">
              From emergency repairs to complete installations, our certified plumbers deliver reliable solutions for
              your home and business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (555) 123-4567
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  Get Free Quote
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Stats */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Happy Customers" },
              { number: "24/7", label: "Emergency Service" },
              { number: "15+", label: "Years Experience" },
              { number: "100%", label: "Satisfaction Guaranteed" },
            ].map((stat, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
                <motion.div className="space-y-2" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Wrench className="w-6 h-6 text-primary" />
              <Badge variant="outline">Repair Services</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Emergency Repairs & Maintenance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Fast, reliable repair services to get your plumbing back to working order. Available 24/7 for emergencies.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {repairServices.map((service, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                        <Badge variant="secondary" className="ml-4 flex-shrink-0">
                          {service.price}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button className="w-full">Schedule Repair</Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Hammer className="w-6 h-6 text-primary" />
              <Badge variant="outline">Installation Services</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Professional Installations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Complete installation services for new construction, renovations, and upgrades with quality materials and
              expert craftsmanship.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {installationServices.map((service, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                        <Badge variant="secondary" className="ml-4 flex-shrink-0">
                          {service.price}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button className="w-full">Get Quote</Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Choose Eriwa Plumbery?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We're committed to providing exceptional service with guaranteed satisfaction.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Licensed & Insured",
                description: "Fully licensed, bonded, and insured for your peace of mind and protection.",
              },
              {
                icon: Clock,
                title: "24/7 Emergency Service",
                description: "Round-the-clock emergency service because plumbing problems don't wait.",
              },
              {
                icon: Award,
                title: "Satisfaction Guaranteed",
                description: "100% satisfaction guarantee on all our work with comprehensive warranties.",
              },
            ].map((feature, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.2}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="text-center p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Get Started?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
              Contact us today for a free consultation and quote on your plumbing project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (555) 123-4567
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  Schedule Online
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
