"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Users, Clock, Award, DollarSign, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/footer/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget/whatsapp-widget"

export default function ApplyPage() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Above-market compensation with performance bonuses",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Work-life balance with flexible hours and time off",
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Training programs and advancement opportunities",
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Work with experienced professionals in a supportive environment",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <Badge variant="outline" className="mb-4">
                Join Our Team
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Build Your Career with Eriwa Plumbery
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Join Nigeria's leading plumbing company and be part of a team that's committed to excellence, growth,
                and making a difference in communities across the country.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Apply Now</Button>
                <Button variant="outline" size="lg">
                  View Open Positions
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight">
              <div className="relative">
                <Image
                  src="/Join-section.png"
                  alt="Join Our Team"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer more than just a job - we provide a career path with growth opportunities, competitive benefits,
              and a supportive work environment.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="h-full text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                        <benefit.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeInUp" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Submit Your Application</h2>
              <p className="text-lg text-muted-foreground">
                Ready to join our team? Fill out the application form below and we'll get back to you soon.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle>Application Form</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="+234 xxx xxx xxxx" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position Applied For *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plumber">Licensed Plumber</SelectItem>
                        <SelectItem value="apprentice">Plumber Apprentice</SelectItem>
                        <SelectItem value="technician">Service Technician</SelectItem>
                        <SelectItem value="sales">Sales Representative</SelectItem>
                        <SelectItem value="customer-service">Customer Service</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="2-5">2-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      placeholder="Tell us why you want to work with Eriwa Plumbery..."
                      rows={6}
                    />
                  </div>

                  <div className="space-y-4">
                    <Label>Certifications & Licenses (check all that apply)</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="licensed" />
                        <Label htmlFor="licensed">Licensed Plumber</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="gas" />
                        <Label htmlFor="gas">Gas Fitting License</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="backflow" />
                        <Label htmlFor="backflow">Backflow Prevention</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="safety" />
                        <Label htmlFor="safety">Safety Certification</Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms and conditions and privacy policy *
                    </Label>
                  </div>

                  <Button size="lg" className="w-full">
                    Submit Application
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              If you have any questions about our open positions or the application process, don't hesitate to reach out
              to our HR team.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>+234 xxx xxx xxxx</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <span>careers@eriwaplumbery.com</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
