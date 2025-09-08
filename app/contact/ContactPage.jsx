"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/footer/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"
import { AnimatedSection } from "@/components/ui/animated-section"
import { motion } from "framer-motion"

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get in touch with our expert team for all your plumbing needs
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="fadeInLeft">
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                            First Name
                          </label>
                          <Input id="firstName" placeholder="Olisa" required />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                            Last Name
                          </label>
                          <Input id="lastName" placeholder="Emeka" required />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="olisa@example.com" required />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input id="phone" type="tel" placeholder="(+234) 703 132 0510" />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <Textarea id="message" placeholder="Tell us about your plumbing needs..." rows={5} required />
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button type="submit" className="w-full">
                          Send Message
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection animation="fadeInRight" delay={0.2}>
              <div className="space-y-8">
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="shadow-xl">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                      <div className="space-y-6">
                        <motion.div
                          className="flex items-start gap-4"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                            <Phone className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Phone</h4>
                            <p className="text-muted-foreground">+234 703 132 0510</p>
                            <p className="text-sm text-muted-foreground">24/7 Emergency Service</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-4"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                            <Mail className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Email</h4>
                            <p className="text-muted-foreground">info@eriwaplumbery.com</p>
                            <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-4"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                            <MapPin className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Address</h4>
                            <p className="text-muted-foreground font-medium">
                              BUILDING MATERIALS INTERNATIONAL MARKET, OGIDI
                            </p>
                            <p className="text-muted-foreground">
                             Building materials market
                            </p>
                            <p className="text-muted-foreground">
                              Enugu-Onitsha Expressway, Off Ugwu Nwasike, Ogbunike
                            </p>
                          </div>

                        </motion.div>

                        <motion.div
                          className="flex items-start gap-4"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                            <Clock className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Business Hours</h4>
                            <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 6:00 PM</p>
                            <p className="text-muted-foreground">Sat: 9:00 AM - 4:00 PM</p>
                            <p className="text-muted-foreground">Sun: Emergency Only</p>
                          </div>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Emergency Contact */}
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Card className="bg-destructive/10 border-destructive/20">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold text-destructive mb-2">Emergency Service</h3>
                      <p className="text-destructive/80 mb-4">
                        Plumbing emergency? We're available 24/7 for urgent repairs.
                      </p>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="destructive">Call Emergency Line</Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>

          {/* Google Maps location section */}
          <AnimatedSection animation="fadeInUp" delay={0.4}>
            <div className="mt-16">
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">Find Us</CardTitle>
                    <p className="text-center text-muted-foreground">
                      Visit our location or use the map for directions
                    </p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="w-full h-96 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Eriwa Plumbery Location"
                      />
                    </div>
                    <div className="p-6 bg-muted">
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>123 Plumber Street, City, State 12345</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
