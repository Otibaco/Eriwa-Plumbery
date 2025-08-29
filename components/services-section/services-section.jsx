"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Droplets, Shield, Clock, Phone, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Pipe Installation",
    description: "Professional pipe installation and replacement services for residential and commercial properties.",
  },
  {
    icon: Droplets,
    title: "Leak Repair",
    description: "Quick and efficient leak detection and repair to prevent water damage and save costs.",
  },
  {
    icon: Shield,
    title: "Emergency Service",
    description: "24/7 emergency plumbing services for urgent repairs and maintenance needs.",
  },
  {
    icon: Clock,
    title: "Maintenance",
    description: "Regular maintenance services to keep your plumbing system running smoothly.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional plumbing services with guaranteed satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our expert plumbers are available 24/7 for emergency services. Get professional help when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Phone className="w-5 h-5" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
              <CheckCircle className="w-5 h-5" />
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
