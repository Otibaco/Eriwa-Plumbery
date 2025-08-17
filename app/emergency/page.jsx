"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Phone, Clock, AlertTriangle, Wrench, Droplets, Zap, Shield, CheckCircle, MessageCircle } from "lucide-react"
import { WhatsAppWidget } from "@/components/layout/whatsapp-widget"

const emergencyServices = [
  {
    icon: Droplets,
    title: "Burst Pipes",
    description: "Immediate response to burst pipes and water damage prevention",
    responseTime: "15-30 mins",
    price: "From ₦8,000",
  },
  {
    icon: AlertTriangle,
    title: "Blocked Drains",
    description: "Professional drain unblocking and sewage backup solutions",
    responseTime: "20-45 mins",
    price: "From ₦5,000",
  },
  {
    icon: Zap,
    title: "Water Heater Failure",
    description: "Emergency water heater repair and replacement services",
    responseTime: "30-60 mins",
    price: "From ₦12,000",
  },
  {
    icon: Wrench,
    title: "Gas Leaks",
    description: "Immediate gas leak detection and emergency shut-off services",
    responseTime: "10-20 mins",
    price: "From ₦15,000",
  },
]

const serviceAreas = [
  {
    city: "Lagos",
    phone: "+234-801-LAGOS-01",
    coverage: ["Victoria Island", "Ikoyi", "Lekki", "Ikeja", "Surulere", "Yaba"],
    averageResponse: "25 mins",
  },
  {
    city: "Abuja",
    phone: "+234-801-ABUJA-02",
    coverage: ["Wuse", "Garki", "Asokoro", "Maitama", "Gwarinpa", "Kubwa"],
    averageResponse: "30 mins",
  },
  {
    city: "Port Harcourt",
    phone: "+234-801-PHCITY-03",
    coverage: ["GRA", "Old GRA", "D-Line", "Rumuola", "Trans Amadi", "Mile 3"],
    averageResponse: "35 mins",
  },
]

export default function EmergencyPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    emergencyType: "",
    description: "",
    address: "",
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleEmergencyCall = (phone) => {
    window.location.href = `tel:${phone}`
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Emergency Alert Banner */}
      <div className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-red-500 p-2 rounded-full animate-pulse">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-xl">24/7 Emergency Plumbing Service</div>
                <div className="text-red-100">Available across Lagos, Abuja & Port Harcourt</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">+234-801-PLUMBER</div>
                <div className="text-red-200 text-sm">Main Emergency Line</div>
              </div>
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                onClick={() => handleEmergencyCall("+2348012345678")}
              >
                <Phone className="mr-2 h-5 w-5" />
                CALL NOW
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">Emergency Plumbing Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            When plumbing disasters strike, every minute counts. Our certified emergency plumbers are ready to respond
            24/7 across Nigeria's major cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700"
              onClick={() => handleEmergencyCall("+2348012345678")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Emergency Hotline
            </Button>
            <Button size="lg" variant="outline">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Emergency
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Emergency Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Emergency Services We Handle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-red-100 dark:bg-red-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-red-600 dark:text-red-300" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">{service.responseTime}</span>
                    </div>
                    <div className="text-lg font-bold text-green-600">{service.price}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Emergency Request Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-red-600">Request Emergency Service</CardTitle>
              <p className="text-muted-foreground">
                Fill out this form for non-life-threatening emergencies. For immediate assistance, call our hotline.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">City *</Label>
                    <Select value={formData.location} onValueChange={(value) => handleInputChange("location", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lagos">Lagos</SelectItem>
                        <SelectItem value="abuja">Abuja</SelectItem>
                        <SelectItem value="port-harcourt">Port Harcourt</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyType">Emergency Type *</Label>
                    <Select
                      value={formData.emergencyType}
                      onValueChange={(value) => handleInputChange("emergencyType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select emergency type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="burst-pipe">Burst Pipe</SelectItem>
                        <SelectItem value="blocked-drain">Blocked Drain</SelectItem>
                        <SelectItem value="water-heater">Water Heater Failure</SelectItem>
                        <SelectItem value="gas-leak">Gas Leak</SelectItem>
                        <SelectItem value="other">Other Emergency</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Full Address *</Label>
                  <Input
                    id="address"
                    placeholder="Enter your complete address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Emergency Description *</Label>
                  <Textarea
                    id="description"
                    rows={4}
                    placeholder="Please describe the emergency situation in detail..."
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Submit Emergency Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Service Areas & Contact */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Emergency Service Areas</h2>
            {serviceAreas.map((area, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl text-green-600">{area.city}</CardTitle>
                    <Badge variant="secondary">Avg: {area.averageResponse}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-red-600" />
                      <span className="font-medium">{area.phone}</span>
                      <Button
                        size="sm"
                        className="ml-auto bg-red-600 hover:bg-red-700"
                        onClick={() => handleEmergencyCall(area.phone)}
                      >
                        Call Now
                      </Button>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Coverage Areas:</p>
                      <div className="grid grid-cols-2 gap-1">
                        {area.coverage.map((location) => (
                          <div key={location} className="text-sm bg-muted rounded p-1 text-center">
                            {location}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Emergency Tips */}
            <Card className="bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
              <CardHeader>
                <CardTitle className="text-lg text-yellow-800 dark:text-yellow-200">
                  <Shield className="inline mr-2 h-5 w-5" />
                  Emergency Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-sm">Turn off main water supply if possible</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-sm">Move valuables away from water damage</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-sm">Take photos for insurance claims</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-sm">Stay calm and call our emergency line</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
