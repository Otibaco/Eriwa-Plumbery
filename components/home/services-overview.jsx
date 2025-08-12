"use client"

import { Wrench, Clock, Shield, Users, Phone, Calendar, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    id: 1,
    name: "Emergency Plumbing",
    description: "24/7 emergency response for burst pipes, blocked drains, and urgent repairs across Nigeria.",
    icon: Wrench,
    price: "From ₦5,000",
    responseTime: "30 mins",
    features: ["24/7 Availability", "Licensed Plumbers", "Emergency Equipment", "Insurance Coverage"],
    popular: true,
  },
  {
    id: 2,
    name: "Bathroom Installation",
    description: "Complete bathroom renovation and fixture installation with premium quality materials.",
    icon: Users,
    price: "From ₦150,000",
    responseTime: "Same day",
    features: ["Design Consultation", "Quality Materials", "Professional Installation", "1 Year Warranty"],
    popular: false,
  },
  {
    id: 3,
    name: "Pipe Installation & Repair",
    description: "Professional pipe installation, repair, and replacement for residential and commercial properties.",
    icon: Shield,
    price: "From ₦8,000",
    responseTime: "2-4 hours",
    features: ["Quality Pipes", "Leak Detection", "Pressure Testing", "Maintenance Tips"],
    popular: false,
  },
  {
    id: 4,
    name: "Water Heater Service",
    description: "Installation, repair, and maintenance of all types of water heaters including tankless systems.",
    icon: Clock,
    price: "From ₦12,000",
    responseTime: "Same day",
    features: ["All Brands", "Energy Efficient", "Safety Inspection", "Performance Optimization"],
    popular: true,
  },
]

const serviceAreas = [
  { city: "Lagos", areas: ["Victoria Island", "Ikoyi", "Lekki", "Ikeja", "Surulere", "Yaba"] },
  { city: "Abuja", areas: ["Wuse", "Garki", "Asokoro", "Maitama", "Gwarinpa", "Kubwa"] },
  { city: "Port Harcourt", areas: ["GRA", "Old GRA", "D-Line", "Rumuola", "Trans Amadi", "Mile 3"] },
]

export function ServicesOverview() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Professional Plumbing Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From emergency repairs to complete installations, our certified plumbers deliver quality service across
          Nigeria's major cities.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {services.map((service) => (
          <Card key={service.id} className="relative group hover:shadow-lg transition-all duration-300">
            {service.popular && (
              <Badge className="absolute -top-2 left-4 bg-yellow-500 text-black z-10">Most Popular</Badge>
            )}

            <CardHeader className="text-center pb-4">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="h-8 w-8 text-green-600 dark:text-green-300" />
              </div>
              <CardTitle className="text-lg">{service.name}</CardTitle>
              <div className="text-2xl font-bold text-green-600 naira-symbol">{service.price}</div>
              <div className="text-sm text-muted-foreground">Response: {service.responseTime}</div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{service.description}</p>

              <div className="space-y-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full group-hover:bg-green-700 transition-colors">
                Book Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Service Areas */}
      <div className="bg-muted/50 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Service Areas</h3>
          <p className="text-muted-foreground">
            We provide professional plumbing services across Nigeria's major cities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceAreas.map((area) => (
            <div key={area.city} className="text-center">
              <h4 className="text-xl font-semibold mb-4 text-green-600">{area.city}</h4>
              <div className="grid grid-cols-2 gap-2">
                {area.areas.map((location) => (
                  <div
                    key={location}
                    className="text-sm bg-background rounded-lg p-2 hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
                  >
                    {location}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">Don't see your area? We're expanding our coverage!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">
              <Phone className="mr-2 h-4 w-4" />
              Call for Coverage
            </Button>
            <Button>
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
