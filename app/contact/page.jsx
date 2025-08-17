"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
} from "lucide-react"
import { WhatsAppWidget } from "@/components/layout/whatsapp-widget"
import { toast } from "sonner"

const contactInfo = [
  {
    icon: Phone,
    title: "Emergency Hotline",
    details: ["+234-801-PLUMBER", "Available 24/7"],
    color: "text-red-600",
  },
  {
    icon: Mail,
    title: "Email Support",
    details: ["info@eriwaplumbery.ng", "support@eriwaplumbery.ng"],
    color: "text-blue-600",
  },
  {
    icon: MapPin,
    title: "Head Office",
    details: ["123 Plumbing Street", "Victoria Island, Lagos"],
    color: "text-green-600",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Fri: 8AM-6PM", "Emergency: 24/7"],
    color: "text-purple-600",
  },
]

const offices = [
  {
    city: "Lagos",
    address: "123 Plumbing Street, Victoria Island",
    phone: "+234-801-LAGOS-01",
    email: "lagos@eriwaplumbery.ng",
    hours: "Mon-Sat: 8AM-6PM",
  },
  {
    city: "Abuja",
    address: "456 Service Avenue, Wuse 2",
    phone: "+234-801-ABUJA-02",
    email: "abuja@eriwaplumbery.ng",
    hours: "Mon-Sat: 8AM-6PM",
  },
  {
    city: "Port Harcourt",
    address: "789 Repair Road, GRA",
    phone: "+234-801-PHCITY-03",
    email: "portharcourt@eriwaplumbery.ng",
    hours: "Mon-Sat: 8AM-6PM",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    serviceType: "",
    location: "",
    message: "",
    urgency: "normal",
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours. For emergencies, please call our hotline.",
      })

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        serviceType: "",
        location: "",
        message: "",
        urgency: "normal",
      })
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again or contact us directly via phone.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="bg-muted/30 py-12 md:py-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Contact Us</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with Nigeria's leading plumbing experts. We're here to
            help with all your plumbing needs.
          </p>
        </div>
      </motion.section>

      {/* Main Section */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 py-8 md:py-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 md:mb-12"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-3 sm:mb-4`}
                  >
                    <info.icon className={`h-5 w-5 sm:h-8 sm:w-8 ${info.color}`} />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg mb-2">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Send us a Message</CardTitle>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+234 801 234 5678"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Select 
                        value={formData.location} 
                        onValueChange={(value) => handleInputChange("location", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lagos">Lagos</SelectItem>
                          <SelectItem value="abuja">Abuja</SelectItem>
                          <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="serviceType">Service Type</Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => handleInputChange("serviceType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency">Emergency Repair</SelectItem>
                          <SelectItem value="installation">Installation</SelectItem>
                          <SelectItem value="maintenance">Maintenance</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="urgency">Urgency Level</Label>
                      <Select 
                        value={formData.urgency} 
                        onValueChange={(value) => handleInputChange("urgency", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency">Emergency (ASAP)</SelectItem>
                          <SelectItem value="urgent">Urgent (Today)</SelectItem>
                          <SelectItem value="normal">Normal (1-2 days)</SelectItem>
                          <SelectItem value="scheduled">Scheduled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      className="min-h-[120px]"
                      placeholder="Please describe your plumbing issue or service request in detail..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isLoading}
                    size="lg"
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold">Our Offices</h2>
            <div className="space-y-4">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                >
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg sm:text-xl text-green-600">
                        {office.city} Office
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 sm:space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">Address</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {office.address}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">Phone</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {office.phone}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">Email</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {office.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">Hours</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {office.hours}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
                <CardContent className="p-4 sm:p-6 text-center">
                  <MessageCircle className="h-8 w-8 sm:h-12 sm:w-12 text-green-600 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                    Need Immediate Help?
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    Chat with us on WhatsApp for instant support and quick
                    responses.
                  </p>
                  <Button 
                    className="bg-green-600 hover:bg-green-700 w-full sm:w-auto"
                    size="sm"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}